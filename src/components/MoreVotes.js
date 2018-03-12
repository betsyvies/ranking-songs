import React from 'react';

const MoreVotes = () => (
  <img className = 'padding' src="assets/icons/plus.png" alt="plus"
  onClick={e => {
    onMoreClick(e)
  }}/>
);

export default  MoreVotes;