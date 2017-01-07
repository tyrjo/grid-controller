import {INACTIVE_STATUS} from '../constants/buttonStatus';

export default {
  gridControllerButtons: getInitialButtonState(),
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  },
  sequencer: {
    activeButtons: getInitialButtonState()
  }
};

export function getInitialButtonState() {
  let buttonsState = {};
  for (let i = 1; i <= 64; i++) {
    buttonsState[i] = {
      status: INACTIVE_STATUS
    };
  }
  return buttonsState;
}
