import { Component, Input } from '@angular/core';
import { Providers } from 'src/app/movie/models/providers.model';
import {trigger, state, style, animate, transition, query, group} from '@angular/animations';


@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.scss'],
  animations:[
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
export class ProvidersListComponent {
  @Input() providers: Providers[] = [];
}
