import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import gridControllerButtons from './gridControllerButtonsReducer';
import sequencer from './sequencerReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  gridControllerButtons,
  sequencer,
  routing: routerReducer
});

export default rootReducer;
