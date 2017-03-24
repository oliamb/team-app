
import { FacebookInitParams, FacebookService, FacebookLoginResponse } from 'ng2-facebook-sdk/dist';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as facebook from 'app/store/facebook';

@Injectable()
export class FacebookEffects {

  @Effect()
  loginObs: Observable<Action> = this.actionsObs
  .ofType(facebook.ActionTypes.LOGIN)
  .switchMap(() => {
    return Observable.from(this.fb.login())
    .map((response: FacebookLoginResponse) => new facebook.LoginComplete(response))
    .catch((error: any) => Observable.of(new facebook.LoginFailure(error)));
  });

  @Effect({dispatch: false})
  initObs: Observable<Action> = this.actionsObs
  .ofType('@ngrx/store/init')
  .do(() => {
    const fbParams: FacebookInitParams = { appId: '106592409880991', xfbml: true, version: 'v2.8' };
    this.fb.init(fbParams);
  });

  constructor (
    private fb: FacebookService,
    private actionsObs: Actions,
  ) { }
}
