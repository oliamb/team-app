
import { FacebookInitParams, FacebookService, FacebookLoginResponse, FacebookLoginStatus } from 'ng2-facebook-sdk/dist';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as facebook from 'app/store/facebook';
import { State } from 'app/store';

@Injectable()
export class FacebookEffects {

  @Effect()
  loginObs: Observable<Action> = this.actionsObs
  .ofType(facebook.ActionTypes.LOGIN)
  .switchMap(() => {
    return Observable.from(this.fb.login())
    .map((response: FacebookLoginResponse) => new facebook.LoggedIn(response))
    .catch((error: any) => Observable.of(new facebook.LoginFailure(error)));
  });

  @Effect()
  profileObs: Observable<Action> = this.actionsObs
  .ofType(facebook.ActionTypes.PROFILE)
  .switchMap(() => {
    return Observable.from(this.fb.api('/me?fields=name,email,picture', 'get'))
    .map((response: facebook.FacebookUserProfile) => new facebook.ProfileComplete(response))
    .catch((error: any) => Observable.of(new facebook.ProfileFailure(error)));
  });

  @Effect()
  loginStatus: Observable<Action> = this.actionsObs
  .ofType(facebook.ActionTypes.CHECK_LOGIN_STATUS)
  .switchMap(() => {
    return Observable.from(this.fb.getLoginStatus())
    .map(response => new facebook.LoggedIn(response))
    .catch((err) => Observable.of(new facebook.CheckLoginStatusFailed(err)));
  });

  @Effect({dispatch: false})
  initObs: Observable<Action> = this.actionsObs
  .ofType('@ngrx/store/init')
  .do(() => {
    const fbParams: FacebookInitParams = { appId: '106592409880991', xfbml: true, version: 'v2.8' };
    this.fb.init(fbParams);
  })
  .delay(1)
  .do(() => {
    this.store.dispatch(new facebook.CheckLoginStatus());
  });

  constructor (
    private fb: FacebookService,
    private actionsObs: Actions,
    private store: Store<State>,
  ) { }
}
