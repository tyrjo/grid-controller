import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as buttonActions from '../actions/gridControllerButtonActions';
import * as sequencerActions from '../actions/sequencerActions';
import GridControllerPanel from '../components/GridControllerPanel';
import Sequencer from '../components/Sequencer';
import WebMidi from 'webmidi';

class GridControllerPage extends React.Component {

  componentDidMount() {
    WebMidi.enable((error)=> {
      if (error) {
        console.error(error);
      }

      console.log(WebMidi.inputs);
      console.log(WebMidi.outputs);

      this.midiInput = WebMidi.getInputByName("IAC Driver Bus 1");

      this.midiInput.addListener('noteon', "all", (e)=> {
          console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ").");
        }
      );

      this.midiOutput = WebMidi.getOutputByName("IAC Driver IAC Bus 2");
    });
  }

  render() {
    console.log(WebMidi.inputs);
    console.log(WebMidi.outputs);
    return (
      <div className="fullheight">
        <Sequencer
          start={this.props.sequencerActions.startSequencer}
          stop={this.props.sequencerActions.stopSequencer}
          reset={this.props.sequencerActions.resetSequencer}
        />
        {/*
         <GridControllerPanel
         buttonsState={this.props.buttonsState}
         buttonPress={this.props.buttonActions.buttonPress}
         buttonRelease={this.props.buttonActions.buttonRelease}
         />*/}
        <GridControllerPanel
          buttonsState={this.props.buttonsState}
          buttonPress={(index)=>{
            console.log("button press: ", index);
            this.midiOutput.playNote(index+24, 1);
        }}
          buttonRelease={(index)=>{
            this.midiOutput.stopNote(index+24, 1);
            this.midiOutput.sendProgramChange(index+1);
        }}
        />
      </div>
    );
  }
}
;

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
