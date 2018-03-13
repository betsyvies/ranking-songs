import React from 'react';
import PropTypes from 'prop-types';

const AllSongs = ({ name, vote }) => (
  <li className = 'flex'>
    <span>{name}</span>
    <img className = 'padding' src="assets/icons/minus.png" alt="minus"/>
    <img className = 'padding' src="assets/icons/plus.png" alt="plus"/>
    <span className = 'padding'>{vote}</span>
  </li>
);

AllSongs.propTypes = {
//   onMoreClick: PropTypes.func.isRequired,
//   onMinusClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};

export default AllSongs;