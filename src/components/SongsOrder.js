import React from 'react';
import PropTypes from 'prop-types'
import AllSongs from './AllSongs';

const SongsOrder = ({ songs, onSongsMoreClick, onSongsMinusClick }) => (
  <div>
    <ul>{songs.map(song =>
      <AllSongs
        key={song.id}
        {...song}
        onMoreClick={() => onSongsMoreClick(song.id)}
        onMinusClick={() => onSongsMinusClick(song.id)}
      />)}
    </ul>
  </div>
);

SongsOrder.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    vote: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onSongsMoreClick: PropTypes.func.isRequired,
  onSongsMinusClick: PropTypes.func.isRequired
}

export default SongsOrder;