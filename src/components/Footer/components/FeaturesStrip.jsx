import React from 'react';

import Plane from '../../../svgs/Plane';
import ShippingBox from '../../../svgs/ShippingBox';


const FeaturesStrip = () => (
  <div className="features-strip-container">
    <div className="payment"><Plane /><span>Secure Payment</span></div>
    <div className="vertical-divider one" />
    <div><Plane /><span>Express Shipping</span></div>
    <div className="vertical-divider" />
    <div><ShippingBox /><span>Free Returns</span></div>
  </div>
);

export default FeaturesStrip;
