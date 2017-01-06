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
  }
};

function getInitialButtonState() {
  let buttonsState = {};
  for (let i = 1; i <= 64; i++) {
    buttonsState[i] = {
      color: "white"
    };
  }
  return buttonsState;
}
