import {GRID_CONTROLLER_BUTTON_PRESS, GRID_CONTROLLER_BUTTON_RELEASE} from '../constants/actionTypes';
import update from 'immutability-helper';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function gridControllerButtonsReducer(state = initialState.gridControllerButtons, action) {
  let newState;
  let newColor = {};
  switch (action.type) {
    case GRID_CONTROLLER_BUTTON_PRESS:
      newColor[action.index] = {color: "green"};
      return update(state, {$merge: newColor});

    case GRID_CONTROLLER_BUTTON_RELEASE:
      newColor[action.index] = {color: "red"};
      return update(state, {$merge: newColor});

    default:
      return state;
  }
}
