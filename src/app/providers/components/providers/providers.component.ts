import { Component } from '@angular/core';
import { ProvidersService } from '../../services/providers.service';
import { Providers } from 'src/app/movie/models/providers.model';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/movie/services/movie.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent {


  constructor(private movieService: MovieService ){

  }

  providers: Providers[] = [];
  loading = true;
  
  ngOnInit(){
    this.fetchProviders();
  }

  fetchProviders() {
    this.loading = true;
    this.movieService.getProviders().subscribe(movie =>{
        this.providers = movie;
        this.loading = false;
    });
  }

}
