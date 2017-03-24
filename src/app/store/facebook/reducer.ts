import * as facebook from './actions';
import { FacebookLoginResponse } from "ng2-facebook-sdk/dist";

export interface State {
  loginResponse: FacebookLoginResponse | null;
};

export const initialState: State = {
  loginResponse: null,
};

export function reducer(state = initialState, action: facebook.Actions): State {
  switch (action.type) {
    case facebook.ActionTypes.LOGIN:
      return Object.assign({}, state, { loginResponse: null } );
    case facebook.ActionTypes.LOGIN_COMPLETE:
      return Object.assign({}, state, { loginResponse: action.payload } );
    default:
      return state;
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getLoginResponse = (state: State) => state.loginResponse;
