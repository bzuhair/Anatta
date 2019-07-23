import React from 'react';

import PaymentShipping from './components/PaymentShipping';
import PageLinks from './components/PageLinks';


const Footer = () => (
  <div className="footer-container">
    <PaymentShipping />
    <PageLinks />
    <div className="divider-2" />
    <div className="copyright">Copyright © 2019 CARIUMA. All Rights Reserved. Terms of Use | Privacy Policy</div>
  </div>
);

export default Footer;
