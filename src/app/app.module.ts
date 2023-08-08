import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import { AppRoutingModule } from 'src/app-routing.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import {MatCardModule} from '@angular/material/card'; 
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import {MatChipsModule} from '@angular/material/chips';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import{ AngularFireModule } from '@angular/fire/compat';
import { MovieSearchComponent } from './movie/components/movie-search/movie-search.component';
import { MovieResultsComponent } from './movie/components/movie-results/movie-results.component';
import { MovieListComponent } from './movie/components/movie-list/movie-list.component';
import { MovieItemComponent } from './movie/components/movie-item/movie-item.component';
import { MovieDetailsComponent } from './movie/components/movie-details/movie-details.component';
import { ProvidersItemComponent } from './providers/components/providers-item/providers-item.component';
import { ProvidersListComponent } from './providers/components/providers-list/providers-list.component';
import { ProvidersComponent } from './providers/components/providers/providers.component';
import { ProvidersFavouritesComponent } from './providers/components/providers-favourites/providers-favourites.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
    LoadingSpinnerComponent,
    LoginComponent,
    RegisterComponent,
    MovieSearchComponent,
    MovieResultsComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDetailsComponent,
    ProvidersItemComponent,
    ProvidersListComponent,
    ProvidersComponent,
    ProvidersFavouritesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatCardModule,
    MatChipsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
