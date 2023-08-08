import { Component, Input } from '@angular/core';
import { MoviePreview } from '../../models/movie-preview.mode';
import {trigger, state, style, animate, transition, query, group} from '@angular/animations';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
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
export class MovieListComponent {
  @Input() movies: MoviePreview[] = [];
  @Input() isTrending!: boolean;

}