import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import gridControllerButtons from './gridControllerButtonsReducer';
import sequencer from './sequencerReducer';
import {routerReducer} from 'react-router-redux';
import {reducer as reduxMidiReducer} from 'redux-midi';

const rootReducer = combineReducers({
  fuelSavings,
  gridControllerButtons,
  sequencer,
  routing: routerReducer,
  midi: reduxMidiReducer
});

export default rootReducer;
