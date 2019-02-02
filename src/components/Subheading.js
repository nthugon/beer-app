import React from 'react';
import UnstyledLink from '../shared/UnstyledLink';
import './Subheading.css';
import PropTypes from 'prop-types';

const Subheading = (props) => (
  <div className="sub-heading">
    <h2>{props.subheading}</h2>
    <div className="bottle-btn" ui-sref="beers">
      <UnstyledLink to={props.link === 'Beers' ? '/beers' : '/'} >
        <button>
          {props.subheading === "Beers" ? (
            <span>Back to {props.link}</span>
          ) : (
            <span>Go to {props.link}</span>
          )}
        </button>
      </UnstyledLink>
      <div></div>
    </div>
  </div> 
);

Subheading.propTypes = {
  subheading: PropTypes.string,
  link: PropTypes.string
};

export default Subheading;