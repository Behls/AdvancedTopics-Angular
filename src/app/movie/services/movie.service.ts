import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre, Movie, Production } from '../models/movie.model';
import { map } from 'rxjs/operators';
import { MoviePreview } from '../models/movie-preview.mode';
import { Providers } from '../models/providers.model';
import { partition } from 'rxjs';

interface movieAPIResponse{
  results:{
    id: string, 
    title: string, 
    poster_path: string,
    production_companies: Production[],
    genres: Genre[],
    overview: string,
    tagline: string,
    release_date: string,
    adult: boolean,
    runtime: number
  }[]
};

interface idAPIResponse{
    id: string, 
    title: string, 
    poster_path: string,
    production_companies: Production[],
    genres: Genre[],
    overview: string,
    tagline: string,
    release_date: string,
    adult: boolean,
    runtime: number
};

interface genreAPIResponse{
  genres:{
    id: string, 
    name: string 
  }[]
};

interface providerAPIResponse{
  results:{
    provider_id: string, 
    provider_name: string,
    logo_path: string
  }[]
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovieByTitle(title: string){
    return this.http.get<movieAPIResponse>('https://api.themoviedb.org/3/search/movie?query='+title+'&api_key=579aa6788fa043c52821d7934512a578&language=en-UK', {})
    .pipe(
      map((response) =>{
        console.log(response);
        if(!response.results){
          console.log(response);
          return [];
        }
        return response.results.map(
          movie => {
            console.log(movie.id);
            return new MoviePreview(movie.id.toString(), movie.title, movie.poster_path);
          }
        );
      })
    );
  }

  getAllGenres(){
    return this.http.get<genreAPIResponse>('https://api.themoviedb.org/3/genre/movie/list?api_key=579aa6788fa043c52821d7934512a578&language=en-UK',{})
    .pipe(
      map((response) =>{
        console.log(response);
        if(!response.genres){
          return [];
        }
        return response.genres.map(
          genre =>{
            console.log(genre.id);
            return new Genre(genre.id.toString(), genre.name);
          }
        )
      })
    )
  }


  getMovieByID(id: string) {
    return this.http.get<idAPIResponse>('https://api.themoviedb.org/3/movie/'+id+'?api_key=579aa6788fa043c52821d7934512a578&language=en-UK',{})
    .pipe(
      map((response) => {
        let genres: Genre[]  =[];
        let prods: Production[]  =[];   

        for(var g of response.genres){
          genres.push(new Genre(g.id, g.name))
        }

        for(var p of response.production_companies){
          prods.push(new Production(p.iso_3166_1, p.name))
        }

        console.log(response);

        console.log(response.genres);
        let newMov = response;
        return new Movie(
          newMov.id,
          newMov.title,
          newMov.poster_path, 
          newMov.production_companies,
          newMov.genres,
          newMov.overview,
          newMov.tagline,
          newMov.release_date,
          newMov.adult,
          newMov.runtime
        );
      })
    )
  }

  getTrendingMovies(){
    return this.http.get<movieAPIResponse>('https://api.themoviedb.org/3/movie/upcoming?api_key=579aa6788fa043c52821d7934512a578&language=en-US&page=1&region=gb',{})
    .pipe(
      map((response) => {

        console.log(response.results[0]);
        if(!response.results){
          return [];
        }
        return response.results.map(
          trending =>{
          return new MoviePreview(
            trending.id,
            trending.title,
            trending.poster_path
          );
        }
      )}
    ))
  }

  getProviders(){
    return this.http.get<providerAPIResponse>('https://api.themoviedb.org/3/watch/providers/movie?api_key=579aa6788fa043c52821d7934512a578&language=en-US&page=1&region=gb',{})
    .pipe(
      map((response)=>{
        console.log(response.results[0])
        if(!response.results){
          return [];
        }
        return response.results.map(provider =>{
          return new Providers(
            provider.provider_id,
            provider.provider_name,
            provider.logo_path
          );
        })
      })
    )
  }

}

