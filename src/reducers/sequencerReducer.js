import {
  START_SEQUENCER,
  STOP_SEQUENCER,
  RESET_SEQUENCER,
  GRID_CONTROLLER_BUTTON_PRESS,
} from '../constants/actionTypes';
import {ACTIVE_STATUS, INACTIVE_STATUS} from '../constants/buttonStatus';
import update from 'immutability-helper';
import initialState, {getInitialButtonState} from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function sequencerReducer(state = initialState.sequencer, action) {
  let currentButtonState, newState = {};

  switch (action.type) {
    case START_SEQUENCER:
      return state;

    case STOP_SEQUENCER:
      return state;

    case RESET_SEQUENCER:
      return update(state,{
        activeButtons: {$set: getInitialButtonState()}
      });

    case GRID_CONTROLLER_BUTTON_PRESS:
      currentButtonState = state.activeButtons[action.index];
      if (currentButtonState.status === ACTIVE_STATUS) {
        newState[action.index] = {status: INACTIVE_STATUS};
      } else {
        newState[action.index] = {status: ACTIVE_STATUS};
      }
      return update(state, {
        activeButtons: {$merge: newState}
      });

    default:
      return state;
  }
}
