const initialSongs = [
  {id: 1, name: 'Sign of the time', img: 'assets/images/1.jpg', vote: 10},
  {id: 2, name: 'Havana', img: 'assets/images/2.jpg', vote: '15' },
  {id: 3, name: 'Eye of the tiger', img: 'assets/images/3.png', vote: 11},
  {id: 4, name: 'Thats what i like', img: 'assets/images/4.jpg', vote: 13},
  {id: 5, name: 'Perfect', img: 'assets/images/5.jpg', vote: 12},
  {id: 6, name: 'Love me like you do', img: 'assets/images/6.jpg', vote: 14},  
];

const SongsOrder = initialSongs.sort(function (a, b) {
  if (a.vote > b.vote) {
    return 1;
  }
  if (a.vote < b.vote) {
    return -1;
  }
  return 0;
}).reverse();

const songs = (state = SongsOrder, action) => {
  switch (action.type) {
    case 'UP_VOTES':
      return state.map(songs => {vote: songs.vote + 1})
    case 'DOWN_VOTES':
      return state.map(songs => {vote: songs.vote - 1})
    default:
      return state
  }
}

export default songs