import * as types from '../constants/actionTypes';

// example of a thunk using the redux-thunk middleware
export function startSequencer() {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.START_SEQUENCER
    });
  };
}

export function stopSequencer() {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.STOP_SEQUENCER
    });
  };
}

export function resetSequencer() {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.RESET_SEQUENCER
    });
  };
}
