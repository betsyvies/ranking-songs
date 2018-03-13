// importamos los `actionTypes` que definimos en el paso anterior
import { actionTypes } from '../actions/actions';

// Supongamos que estos son los productos que recibimos de nuestra API JSON
const SONGS = [
    {id: 1, name: 'Sign of the time', img: 'assets/images/1.jpg', vote: 10},
    {id: 2, name: 'Havana', img: 'assets/images/2.jpg', vote: 15 },
    {id: 3, name: 'Eye of the tiger', img: 'assets/images/3.png', vote: 11},
    {id: 4, name: 'Thats what i like', img: 'assets/images/4.jpg', vote: 13},
    {id: 5, name: 'Perfect', img: 'assets/images/5.jpg', vote: 12},
    {id: 6, name: 'Love me like you do', img: 'assets/images/6.jpg', vote: 13},  
];
  
  const INIT_STATE = {
    // La de productos
    showSongs: SONGS,
    // El texto de búsqueda que ingresa el usuario
  };
  
  // nuestro reducer todavía no reacciona a ninguna acción, pero ya tiene un valor
  // inicial

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    // Si el action es `FILTER_TEXT_CHANGED`
    case actionTypes.UP_VOTES:
      state = state.showSongs.map(song => {
        let songId = song.id;
        let actionId = parseInt(action.id);
  
        if (songId === actionId) {        
          // console.log(song.id);      
          song.vote+=1;
        }
        return song;
      });
      break;
    // Si el action es `IN_STOCK_ONLY_CHANGED`
    case actionTypes.DOWN_VOTES:
      state = state.showSongs.map(song => {
        let songId = song.id;
        let actionId = parseInt(action.id);

        if (songId === actionId) {
          // console.log(song.id);          
          song.vote-=1;
        }
        return song;        
      });
      break;
    default:
      state = {...state};
  }
  return state;
}