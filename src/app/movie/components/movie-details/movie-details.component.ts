import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, Subscription } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private movieService: MovieService , private location: Location, private auth: AngularFireAuth){}

  movie$!: Observable<Movie>;
  authenticated = false; 
  authSubscription = new Subscription;
  // isFavourite = false;
  // favouriteSub = new Subscription;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.fetchMovie(id!);
    })
    this.authSubscription = this.auth.authState.subscribe(user =>{
      this.authenticated = user ? true : false;
    })
}

fetchMovie(id: string){
  this.movie$ = this.movieService.getMovieByID(id);
  // this.favouriteSub = this.favouriteService.favourites$.subscribe(favourites =>{
  //   this.isFavourite = favourites.map(f => f.id).indexOf(id) !== -1;

  // })
}

// onRemoveFavourite(recipe: Recipe){
//   const limitedRecipe = new RecipePreview(recipe.id, recipe.name, recipe.imgURL)
//   this.favouriteService.removeFavourites(limitedRecipe);
// }

// onAddFavourite(recipe: Recipe){
//   const limitedRecipe = new RecipePreview(recipe.id, recipe.name, recipe.imgURL)
//   this.favouriteService.storeFavourites(limitedRecipe);
// }

onBack(){
  console.log("impressed")
  this.location.back();
}

ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
    // this.favouriteSub.unsubscribe();`
}
}
