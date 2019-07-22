import React, { Component } from 'react';

import Header from './Header/Header';

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div id="main">
        <Header />
        <div className="divider" />
      </div>
    );
  }
}


export default Main;
