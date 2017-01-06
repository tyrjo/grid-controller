import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/gridControllerButtonActions';
import GridControllerPanel from '../components/GridControllerPanel';

export const GridControllerPage = (props) => {
  return (
    <GridControllerPanel
      buttonsState={props.buttonsState}
      buttonPress={props.actions.buttonPress}
      buttonRelease={props.actions.buttonRelease}
    />
  );
};

GridControllerPage.propTypes = {
  actions: PropTypes.object.isRequired,
  buttonsState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  //console.log(state);
  return {
    buttonsState: state.gridControllerButtons
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridControllerPage);
