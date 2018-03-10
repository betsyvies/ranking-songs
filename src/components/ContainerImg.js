import React from 'react';
import Img from './components/Img'
import Previous from './components/Previous'
import Next from './components/Next'

const ContainerImg = () => (
  <div className='flex'>
    <Previous />
    <Img />
    <Next />
  </div>
);

export default ContainerImg;