import * as shell from './actions';

export interface State {
  title: string;
};

export const initialState: State = {
  title: 'Team'
};

export function reducer(state = initialState, action: shell.Actions): State {
  switch (action.type) {
    case shell.ActionTypes.SET_TITLE:
      return Object.assign({}, state, { title: action.payload } );

    default: {
      return state;
    }
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

export const getTitle = (state: State) => state.title;
