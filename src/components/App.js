import React from 'react';
import './global/App.css';

const songs = [
  {id: 1, name: 'Sign of the time', img: 'assets/images/1.jpg', vote: '15'},
  {id: 2, name: 'Havana', img: 'assets/images/2.jpg', vote: '14' },
  {id: 3, name: 'Eye of the tiger', img: 'assets/images/3.png', vote: '12'},
  {id: 4, name: 'Thats what i like', img: 'assets/images/4.jpg', vote: '11'},
  {id: 5, name: 'Perfect', img: 'assets/images/5.jpg', vote: '13'},
  {id: 6, name: 'Love me like you do', img: 'assets/images/6.jpg', vote: '10'},  
];

const App = () => (
  <div>
    <div className = 'flex'>
      <img className = 'padding' src="assets/icons/previous.png" alt=""/>
      <img className = 'padding' src="assets/images/2.jpg" alt=""/>
      <img className = 'padding' src="assets/icons/next.png" alt=""/>
    </div>
    <div>
      <ul>
        {songs.map(({id, name, vote}) => 
        <li className = 'flex' key={id}>
          <span>{name}</span>
          <img className = 'padding' src="assets/icons/plus.png" alt="plus"/>
          <img className = 'padding' src="assets/icons/minus.png" alt="minus"/>
          <span className = 'padding'>{vote}</span>
        </li>
        )}
      </ul>
    </div>
  </div>  
)

export default App;
