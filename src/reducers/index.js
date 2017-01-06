import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import gridControllerButtons from './gridControllerButtonsReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  gridControllerButtons,
  routing: routerReducer
});

export default rootReducer;
