import React from 'react';

const MinusVotes = () => (
  <img className = 'padding' src="assets/icons/minus.png" alt="minus"
  onClick={e => {
    onMinusClick(e)
  }}/>
);

export default MinusVotes;