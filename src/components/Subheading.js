import React from 'react';
import './Subheading.css';
import PropTypes from 'prop-types';

const Subheading = (props) => (
  <div className="sub-heading">
    <h2>{props.subheading}</h2>
    <div className="bottle-btn" ui-sref="beers">
      <button><span></span></button>
      <div></div>
    </div>
  </div> 
);

Subheading.propTypes = {
  subheading: PropTypes.string
};

export default Subheading;