import React, { Component } from 'react';

import CheckoutIcon from '../../svgs/CheckoutIcon';
import AccountIcon from '../../svgs/AccountIcon';

export class Header extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="header-container">
        <div className='top center-content-flex'><div>FREE US SHIPPING & RETURN</div></div>
        <div className="nav-bar">
          <div className="header-left">
            <span style={{ marginRight: '40px' }}>Men</span>
            <span>Women</span>
          </div>
          <div className="logo-wrapper">
            <div className="logo">
              <span className="oval-yellow" />
              <span className="oval-green" />
            </div>
          </div>
          <div className="header-right">
            <span style={{ marginRight: '38px' }}>About</span>
            <div className='icons'>
              <AccountIcon />
              <CheckoutIcon />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
