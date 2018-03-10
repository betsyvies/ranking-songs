import React from 'react';
import App from './components/Img'
import App from './components/Previous'
import App from './components/Next'

const ContainerImg = () => (
  <div className='flex'>
    <Previous />
    <Img />
    <Next />
  </div>
);

export default ContainerImg;