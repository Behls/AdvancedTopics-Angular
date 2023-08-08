import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private auth: AngularFireAuth) {}

  onLogout(){
    this.authService.logout();
  }
  
  authenticated = false;
  authSubscription = new Subscription;
  
  ngOnInit(){
    this.authSubscription = this.auth.authState.subscribe(user =>{
      this.authenticated = user ? true : false;
    })

  }

  ngOnDestroy(): void {
      this.authSubscription.unsubscribe();
  }
}
