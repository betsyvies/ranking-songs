import React from 'react';
import './global/App.css';

const App = () => (
  <div>
    <div className = 'flex'>
      <img className = 'padding' src="assets/icons/previous.png" alt=""/>
      <img className = 'padding' src="assets/images/2.jpg" alt=""/>
      <img className = 'padding' src="assets/icons/next.png" alt=""/>
    </div>
    <div>
      <ul>
        <li className = 'flex'>
          <span>name</span>
          <img className = 'padding' src="assets/icons/plus.png" alt="plus"/>
          <img className = 'padding' src="assets/icons/minus.png" alt="minus"/>
          <span className = 'padding'>23</span>
        </li>
        <li className = 'flex'>
          <span>name</span>
          <img className = 'padding' src="assets/icons/plus.png" alt="plus"/>
          <img className = 'padding' src="assets/icons/minus.png" alt="minus"/>
          <span className = 'padding'>23</span>
        </li>
        <li className = 'flex'>
          <span>name</span> 
          <img className = 'padding' src="assets/icons/plus.png" alt="plus"/>
          <img className = 'padding' src="assets/icons/minus.png" alt="minus"/>
          <span className = 'padding'>23</span>
        </li>
        <li className = 'flex'>
          <span>name</span>
          <img className = 'padding' src="assets/icons/plus.png" alt="plus"/>
          <img className = 'padding' src="assets/icons/minus.png" alt="minus"/>
          <span className = 'padding'>23</span>
        </li>
        <li className = 'flex'>
          <span>name</span>
          <img className = 'padding' src="assets/icons/plus.png" alt="plus"/>
          <img className = 'padding' src="assets/icons/minus.png" alt="minus"/>
          <span className = 'padding'>23</span>
        </li>
        <li className = 'flex'>
          <span>name</span>
          <img className = 'padding' src="assets/icons/plus.png" alt="plus"/>
          <img className = 'padding' src="assets/icons/minus.png" alt="minus"/>
          <span className = 'padding'>23</span>
        </li>
      </ul>
    </div>
  </div>  
)

export default App;
