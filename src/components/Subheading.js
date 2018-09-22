import React from 'react';
import './Subheading.css';

const Subheading = () => (
  <div className="sub-heading">
    <h2>Welcome!</h2>
    <div className="bottle-btn" ui-sref="beers">
      <button><span>Get Started</span></button>
      <div></div>
    </div>
  </div> 
);

export default Subheading;