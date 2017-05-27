import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import WebMidi from 'webmidi';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {

  render() {
    return (
      <div className="fullheight">
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/fuel-savings">Demo App</Link>
        {' | '}
        <Link to="/about">About</Link>
        {' | '}
        <Link to="/grid-controller">Grid Controller</Link>
        <br/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
