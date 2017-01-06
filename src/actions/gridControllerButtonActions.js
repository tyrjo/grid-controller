import * as types from '../constants/actionTypes';

// example of a thunk using the redux-thunk middleware
export function buttonPress(index) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.GRID_CONTROLLER_BUTTON_PRESS,
      index: index
    });
  };
}

export function buttonRelease(index) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.GRID_CONTROLLER_BUTTON_RELEASE,
      index: index
    });
  };
}
