import React from 'react';
import SongsOrder from '../containers/SongsOrder';
import ImgOrder from './ImgOrder'

const RankingList = ({ songs }) => {

  return (
    <div>
      <ImgOrder/>
      <SongsOrder songs={songs}/>
    </div>
    
  );
}

export default RankingList;