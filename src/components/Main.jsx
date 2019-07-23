import React, { Component } from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

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
        <Footer />
      </div>
    );
  }
}


export default Main;
