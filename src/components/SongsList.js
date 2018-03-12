import React from 'react';
import AllSongs from './AllSongs';

const songs = [
  {id: 1, name: 'Sign of the time', img: 'assets/images/1.jpg', vote: '10'},
  {id: 2, name: 'Havana', img: 'assets/images/2.jpg', vote: '15' },
  {id: 3, name: 'Eye of the tiger', img: 'assets/images/3.png', vote: '11'},
  {id: 4, name: 'Thats what i like', img: 'assets/images/4.jpg', vote: '13'},
  {id: 5, name: 'Perfect', img: 'assets/images/5.jpg', vote: '12'},
  {id: 6, name: 'Love me like you do', img: 'assets/images/6.jpg', vote: '14'},  
];

const songsOrder = songs.sort(function (a, b) {
  console.log(a.vote);
  if (a.vote > b.vote) {
    return 1;
  }
  if (a.vote < b.vote) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

const SongsList = () => (
  <div>
    <ul>{songsOrder.reverse().map(song =>
      <AllSongs key={song.id}
        {...song}
      />
    )}
  </ul>
</div>
);







export default SongsList;