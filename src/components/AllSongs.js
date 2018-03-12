import React from 'react';
import PropTypes from 'prop-types';
import MinusVotes from './MinusVotes';
import MoreVotes from './MoreVotes';

const AllSongs = ({ onMoreClick, onMinusClick, name, vote }) => (
  <li className = 'flex'>
    <span>{name}</span>
    <MinusVotes/>
    <MoreVotes/>
    <span className = 'padding'>{vote}</span>
  </li>
);

AllSongs.propTypes = {
  onMoreClick: PropTypes.func.isRequired,
  onMinusClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};

export default AllSongs;