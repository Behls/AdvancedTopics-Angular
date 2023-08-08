import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./app/shared/components/not-found/not-found.component";
import { LoginComponent } from "./app/auth/components/login/login.component";
import { RegisterComponent } from "./app/auth/components/register/register.component";
import { MovieSearchComponent } from "./app/movie/components/movie-search/movie-search.component";
import { MovieResultsComponent } from "./app/movie/components/movie-results/movie-results.component";
import { MovieDetailsComponent } from "./app/movie/components/movie-details/movie-details.component";
import { AuthGuardService } from "./app/auth/services/auth-guard.service";
import { ProvidersComponent } from "./app/providers/components/providers/providers.component";
import { ProvidersFavouritesComponent } from "./app/providers/components/providers-favourites/providers-favourites.component";

const routes: Routes =[
    {path: '', component: MovieSearchComponent, children: [
        {path: 'search/:title', component: MovieResultsComponent}, 
        {path: 'search/:title/:id', component: MovieDetailsComponent}
    ]},
    {path: 'subscriptions', component: ProvidersComponent, canActivate:[AuthGuardService]},
    {path: 'subscribed', component: ProvidersFavouritesComponent, canActivate:[AuthGuardService]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}
