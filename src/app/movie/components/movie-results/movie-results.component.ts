import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MoviePreview } from '../../models/movie-preview.mode';

@Component({
  selector: 'app-movie-results',
  templateUrl: './movie-results.component.html',
  styleUrls: ['./movie-results.component.scss']
})
export class MovieResultsComponent implements OnInit{

  constructor(private route: ActivatedRoute, private movieService: MovieService){}

  loading = true;
  movies: MoviePreview[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const title = params.get('title');
      this.fetchMovie(title!);
    });
    
  }

  fetchMovie(title:string) {
    this.loading = true;
    this.movieService.getMovieByTitle(title).subscribe(movie =>{
        this.movies = movie;
        this.loading = false;
    });
  }

}
