import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Providers } from 'src/app/movie/models/providers.model';
import { MovieService } from 'src/app/movie/services/movie.service';
import { Location } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ProvidersService } from '../../services/providers.service';
import { Observable, Subscription } from 'rxjs';
import {trigger, state, style, animate, transition, query, group} from '@angular/animations';

@Component({
  selector: 'app-providers-item',
  templateUrl: './providers-item.component.html',
  styleUrls: ['./providers-item.component.scss'],
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
export class ProvidersItemComponent implements OnInit, OnDestroy {
  
  constructor(private route: ActivatedRoute, private movieService: MovieService , private location: Location, private auth: AngularFireAuth, private providerService: ProvidersService){}

  @Input() provider!: Providers;
  provider$!: Observable<Providers>;
  authenticated = false; 
  authSubscription = new Subscription;
  isFavourite = false;
  favouriteSub = new Subscription;


  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
    this.favouriteSub.unsubscribe();
  }

  ngOnInit(): void {
    this.authSubscription = this.auth.authState.subscribe(user =>{
      this.authenticated = user ? true : false;
    })
  }
  onRemoveFavourite(provider: Providers){
    const newProvider = new Providers(provider.provider_id, provider.provider_name, provider.logo_path)
    this.providerService.removeProviders(newProvider);
    this.favouriteSub = this.providerService.providers$.subscribe(provider =>{
      this.isFavourite = false;
    })
  }

  onAddFavourite(provider: Providers){
    const newProvider = new Providers(provider.provider_id, provider.provider_name, provider.logo_path)
    this.providerService.storeProviders(newProvider);
    this.favouriteSub = this.providerService.providers$.subscribe(provider =>{
      this.isFavourite = true;
    })
  } 
}
