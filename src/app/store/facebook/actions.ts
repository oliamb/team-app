import { Action } from '@ngrx/store';
import { type } from '../util';
import * as models from './models';
import { FacebookLoginResponse, FacebookLoginStatus } from 'ng2-facebook-sdk/dist';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
  LOGIN:           type('[Facebook] Login'),
  LOGGED_IN:           type('[Facebook] Login Complete'),
  LOGIN_FAILURE:           type('[Facebook] Login Failure'),
  CHECK_LOGIN_STATUS: type('[Facebook] Check Login Status'),
  CHECK_LOGIN_STATUS_FAILED: type('[Facebook] Check Login Status Failed'),
  PROFILE: type('[Facebook] Profile'),
  PROFILE_COMPLETE: type('[Facebook] Profile Complete'),
  PROFILE_FAILURE: type('[Facebook] Profile Failure'),
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class Login implements Action {
  type = ActionTypes.LOGIN;
}

export class LoggedIn implements Action {
  type = ActionTypes.LOGGED_IN;

  constructor(public payload: FacebookLoginResponse) { }
}

export class LoginFailure implements Action {
  type = ActionTypes.LOGIN_FAILURE;

  constructor(public payload: any) { }
}

export class CheckLoginStatus implements Action {
  type = ActionTypes.CHECK_LOGIN_STATUS;
}

export class CheckLoginStatusFailed implements Action {
  type = ActionTypes.CHECK_LOGIN_STATUS_FAILED;

  constructor(public payload: any) { }
}

export class Profile implements Action {
  type = ActionTypes.PROFILE;
  constructor() { }
}

export class ProfileComplete implements Action {
  type = ActionTypes.PROFILE_COMPLETE;
  constructor(public payload: models.FacebookUserProfile) { }
}

export class ProfileFailure implements Action {
  type = ActionTypes.PROFILE_FAILURE;
  constructor(public payload: any) { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = Login
  | LoggedIn
  | LoginFailure
  | CheckLoginStatus
  | Profile
  | ProfileComplete
  | ProfileFailure
  ;
