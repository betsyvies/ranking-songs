import React from 'react';
import PropTypes from 'prop-types';
import MinusVotes from './MinusVotes';
import MoreVotes from './MoreVotes';

const AllSongs = ({name, vote}) => (
  <li className = 'flex'>
    <span>{name}</span>
    <MinusVotes/>
    <MoreVotes/>
    <span className = 'padding'>{vote}</span>
  </li>
);

AllSongs.propTypes = {
  name: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};

export default AllSongs;