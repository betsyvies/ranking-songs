import React from 'react';
import SongsOrder from '../SongsOrder';

const RankingList = ({ songs }) => {

  return (
    <div>
      <SongsOrder songs={songs}/>
    </div>
  );
}

export default RankingList;