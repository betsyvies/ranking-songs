import React from 'react';

const ImgOrder = ({id}) => (
  <div>
    <img className = 'padding' src="assets/icons/previous.png" alt=""/>
    <img className = 'padding' src="assets/images/2.jpg" alt={id} />
    <img className = 'padding' src="assets/icons/next.png" alt=""/>
  </div>
);

export default ImgOrder;