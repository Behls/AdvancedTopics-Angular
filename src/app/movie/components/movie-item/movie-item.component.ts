import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviePreview } from '../../models/movie-preview.mode';
import {trigger, state, style, animate, transition, query, group} from '@angular/animations';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
  animations: [
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
        animate('3s ease-in')
      ])
    ])
  ]
})
export class MovieItemComponent {

  @Input() movie!: MoviePreview;
  @Input() isTrending!: boolean;
  
  constructor(private router : Router, private route: ActivatedRoute){}

  onViewMovie(){
    this.router.navigate([this.movie.id], {relativeTo: this.route});
  }
}
