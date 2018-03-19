import React from 'react';
import PropTypes from 'prop-types'
// import AllSongs from './AllSongs';

const SongsOrder = ({ songs, setMoreVotes, setMinusVotes}) => {
  // console.log(songs);
  const rankingOrder = songs.sort(
    function (a, b) {
      if (a.vote > b.vote) {
        return 1;
      }
      if (a.vote < b.vote) {
        return -1;
      }
      return 0;
      }).reverse();
  
  return (
    <div>
      <ul>
        {rankingOrder.map(song => {
          return(
          <li className = 'flex' key={song.id} id={song.id} data-vote={song.vote}>
            <span>{song.name}</span>
            <img className = 'padding' src="assets/icons/minus.png" alt="minus" 
              onClick={evt => {
                setMinusVotes(evt.target.parentNode.id)
              }}/>
            <img className = 'padding' src="assets/icons/plus.png" alt="plus" 
              onClick={evt => {
                setMoreVotes(evt.target.parentNode.id)
              }}
            />
            <span className = 'padding'>{song.vote}</span>
          </li>)
        })}
      </ul>
    </div>
  );
}


SongsOrder.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    vote: PropTypes.number.isRequired,
  }).isRequired).isRequired,
//   onSongsMoreClick: PropTypes.func.isRequired,
//   onSongsMinusClick: PropTypes.func.isRequired
}

export default SongsOrder;