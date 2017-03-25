import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import { State } from 'app/store';
import * as fromRoot from 'app/store';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<State>
  ) { }

  canActivate() {
    return this.store.select(fromRoot.getFacebookLoginStatus)
    .map(auth => {
      const connected =  auth && auth.status === 'connected';
      if (!connected) {
        this.store.dispatch(go('/login'));
      }
      return connected;
    });
  }
}
