import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  register(email: string, password:string) : Promise <string | void>{
    return this.auth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.router.navigate(['']);
    })
    .catch( error => {
      if(error.code == 'auth/email-already-in-use'){
        return ' an account already exists';
      }

      if(error.code == 'auth/invalid-email'){
        return 'email address is invalid';
      }
      return 'an unknown error has occured.'
    })
  }

  login(email: string, password: string) : Promise <string | void>{
    return this.auth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.router.navigate(['']);
    })
    .catch( error => {
      if(error.code == 'auth/user-not-found'){
        return 'no account found';
      }

      if(error.code == 'auth/wrong-password'){
        return 'password is invalid';
      }
      return 'an unknown error has occured.'
    })
  }

  logout(){
    this.auth.signOut();
    this.router.navigate(['']);
  }
}
