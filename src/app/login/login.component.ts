import { Component, OnDestroy, OnInit } from '@angular/core';
import { go } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { State } from 'app/store';
import { Subject } from 'rxjs/Rx';
import * as facebook from 'app/store/facebook';
import * as fromRoot from 'app/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy, OnInit {

  loginStatusObs = this.store.select(fromRoot.getFacebookLoginStatus);
  destroyObs = new Subject();

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.loginStatusObs
    .map(() => this.store.dispatch(go('/chat')))
    .takeUntil(this.destroyObs)
    .subscribe();
  }

  ngOnDestroy() {
    this.destroyObs.next();
  }

  login(): void {
    this.store.dispatch(new facebook.Login());
  }

  profile(): void {
    this.store.dispatch(new facebook.Profile());
  }
}
