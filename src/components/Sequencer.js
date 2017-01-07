import React from 'react';

// Since this component is simple and static, there's no parent container for it.
class Sequencer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        Sequencer:
        <button
          onClick={this.props.start}
        >Start
        </button>
        <button
          onClick={this.props.stop}
        >Stop
        </button>
        <button
          onClick={this.props.reset}
        >Reset
        </button>
      </div>
    );
  }
}

export default Sequencer;
