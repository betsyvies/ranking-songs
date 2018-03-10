import React from 'react';
import Img from './Img';
import Previous from './Previous';
import Next from './Next';

const ContainerImg = () => (
  <div className='flex'>
    <Previous />
    <Img />
    <Next />
  </div>
);

export default ContainerImg;