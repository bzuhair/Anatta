import React from 'react';

import FeaturesStrip from './components/FeaturesStrip';
import PageLinks from './components/PageLinks';


const Footer = () => (
  <div className="footer-container">
    <FeaturesStrip />
    <PageLinks />
    <div className="divider-2" />
    <div className="copyright">Copyright © 2019 CARIUMA. All Rights Reserved. Terms of Use | Privacy Policy</div>
  </div>
);

export default Footer;
