import { Action } from '@ngrx/store';
import { type } from '../util';
import { FacebookLoginResponse } from 'ng2-facebook-sdk/dist';

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
  LOGIN_COMPLETE:           type('[Facebook] Login Complete'),
  LOGIN_FAILURE:           type('[Facebook] Login Failure'),
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

  constructor() { }
}

export class LoginComplete implements Action {
  type = ActionTypes.LOGIN_COMPLETE;

  constructor(public payload: FacebookLoginResponse) { }
}

export class LoginFailure implements Action {
  type = ActionTypes.LOGIN_FAILURE;

  constructor(public payload: any) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = Login
  | LoginComplete
  | LoginFailure
  ;
