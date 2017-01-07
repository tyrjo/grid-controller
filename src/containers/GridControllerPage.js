import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as buttonActions from '../actions/gridControllerButtonActions';
import * as sequencerActions from '../actions/sequencerActions';
import GridControllerPanel from '../components/GridControllerPanel';
import Sequencer from '../components/Sequencer';

export const GridControllerPage = (props) => {
  return (
    <div>
      <Sequencer
        start={props.sequencerActions.startSequencer}
        stop={props.sequencerActions.stopSequencer}
        reset={props.sequencerActions.resetSequencer}
      />
      <GridControllerPanel
        buttonsState={props.buttonsState}
        buttonPress={props.buttonActions.buttonPress}
        buttonRelease={props.buttonActions.buttonRelease}
      />
    </div>
  );
};

GridControllerPage.propTypes = {
  buttonActions: PropTypes.object.isRequired,
  buttonsState: PropTypes.object.isRequired,
  sequencerActions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  //console.log(state);
  return {
    buttonsState: state.gridControllerButtons
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buttonActions: bindActionCreators(buttonActions, dispatch),
    sequencerActions: bindActionCreators(sequencerActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridControllerPage);
