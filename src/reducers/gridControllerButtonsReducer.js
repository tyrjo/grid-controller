import {
  GRID_CONTROLLER_BUTTON_PRESS,
  GRID_CONTROLLER_BUTTON_RELEASE,
  RESET_SEQUENCER,
} from '../constants/actionTypes';
import {ACTIVE_STATUS, INACTIVE_STATUS} from '../constants/buttonStatus';
import update from 'immutability-helper';
import initialState, {getInitialButtonState} from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function gridControllerButtonsReducer(state = initialState.gridControllerButtons, action) {
  let newState = {};
  let currentButtonState, newButtonState = {};
  //console.log(state);
  switch (action.type) {
    case RESET_SEQUENCER:
      return getInitialButtonState();

    case GRID_CONTROLLER_BUTTON_PRESS:
      currentButtonState = state[action.index];
      newButtonState = update(currentButtonState, {color: {$set: "green"}});
      newState[action.index] = newButtonState;
      return update(state, {$merge: newState});


    case GRID_CONTROLLER_BUTTON_RELEASE:
      currentButtonState = state[action.index];
      if (currentButtonState.status === ACTIVE_STATUS) {
        newState[action.index] = {color: "white", status: INACTIVE_STATUS};
      } else {
        newState[action.index] = {color: "red", status: ACTIVE_STATUS};
      }
      return update(state, {$merge: newState});

    default:
      return state;
  }
}
