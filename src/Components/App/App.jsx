import React, { Component } from 'react';
import Router from '../Routes/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={this.props.history} />
      </div>
    );
  }
}

export default App;