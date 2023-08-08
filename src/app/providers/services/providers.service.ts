import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { Providers } from 'src/app/movie/models/providers.model';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  userID!: string | null;
  providers: Providers[] = [];
  providers$ = new BehaviorSubject<Providers[]>([]);
  authToken: any;


  constructor(private http: HttpClient, private auth: AngularFireAuth) {
    
    this.auth.authState.subscribe(user=>{
      this.userID = user ? user.uid : null;
      if(this.userID){
        user?.getIdToken(false).then(token =>{
          this.authToken = token;
          this.getProviders();
        })
      }else{
        this.getProviders();
      }
    })
  }
  
  getProviders(){
    if(this.userID){
        this.providers = [];
        this.providers$.next(this.providers.slice());
        return;
    }
    this.http.get<Providers[]>('https://assignmenttwo-160c3-default-rtdb.europe-west1.firebasedatabase.app/providers/'+this.userID+'.json',{
      params:{
        'auth': this.authToken
      }
    }).subscribe(response =>{
      if(response){
        console.log(response);
        this.providers = response;
        this.providers$.next(this.providers.slice());
      }
    })
  }

  storeProviders(provider: Providers){
    this.providers.push(provider);
    this.http.put<Providers[]>('https://assignmenttwo-160c3-default-rtdb.europe-west1.firebasedatabase.app/providers/'+this.userID+'.json', this.providers, {
      params:{
        'auth': this.authToken
      }
    }).subscribe();
    this.providers$.next(this.providers.slice());
  }

  removeProviders(provider: Providers){
    let i = this.providers.map(f => f.provider_id).indexOf(provider.provider_id);
    this.providers.splice(i,1);
    this.http.put<Providers[]>('https://assignmenttwo-160c3-default-rtdb.europe-west1.firebasedatabase.app/providers/'+this.userID+'.json', this.providers, {
      params:{
        'auth': this.authToken
      }
    }).subscribe();
    this.providers$.next(this.providers.slice());
  }


}
