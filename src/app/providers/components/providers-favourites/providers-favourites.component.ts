import { Component } from '@angular/core';
import { Providers } from 'src/app/movie/models/providers.model';
import { ProvidersService } from '../../services/providers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-providers-favourites',
  templateUrl: './providers-favourites.component.html',
  styleUrls: ['./providers-favourites.component.scss']
})
export class ProvidersFavouritesComponent {

  constructor(private providerService: ProvidersService ){

  }

  providers: Providers[] = [];
  loading = true;
  favouriteSub = new Subscription;

  ngOnInit(){
    this.favouriteSub = this.providerService.providers$.subscribe(prov =>{
      this.providers = prov;
      this.loading = false;
    })
  }

  ngOnDestroy(){
    this.favouriteSub.unsubscribe();
  }
}
