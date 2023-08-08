import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MoviePreview } from '../../models/movie-preview.mode';
import {trigger, state, style, animate, transition, query, group} from '@angular/animations';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
  animations:[
    trigger('fade', [
      state('*', style({
        'opacity': 1,
        'transform': 'scale(1) translateY(0)',
      })),
      transition('void => *',[
        style({
          'opacity': 0,
          'transform': 'scale(0) translateY(100px)',
        }),
        animate('.8s ease-in')
      ])
    ]),
    trigger('text', [
      state('*', style({
        'opacity': 1
      })),
      transition('void => *',[
        style({
          'opacity': 0
        }),
        animate('1s ease-in')
      ])
    ])
  ]
})
export class MovieSearchComponent implements OnInit {

  constructor(private movieService: MovieService, private router: Router, private route: ActivatedRoute){}

  movies: MoviePreview[] =[];
  loading = true;
  isTrending = true;

  searchform: FormGroup = new FormGroup({
    title: new FormControl("", Validators.required)
  });

  onSubmit(){
    let value = this.searchform.controls['title'].value;
    this.router.navigate(['../search/',  value]);
    this.isTrending = false;
  }
  
  ngOnInit(): void {
    this.movieService.getTrendingMovies().subscribe(response => {
      this.movies = response;
      this.loading = false;
    });
  }
}
