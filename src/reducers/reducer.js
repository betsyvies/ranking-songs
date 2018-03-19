// importamos los `actionTypes` que definimos en el paso anterior
import { actionTypes } from '../actions/actions';
import INIT_STATE from './reducers-song'

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    // Si el action es `FILTER_TEXT_CHANGED`
    case actionTypes.UP_VOTES:
      state = {
        ...state,
        showSongs: state.showSongs.map(song => {
        let songId = song.id;
        let actionId = parseInt(action.id, 10);
  
        if (songId === actionId) {
          // console.log(song.id);
          song.vote+=1;
        }
        return song;
      })};
      break;
    // Si el action es `IN_STOCK_ONLY_CHANGED`
    case actionTypes.DOWN_VOTES:
      state = {
        ...state,
        showSongs: state.showSongs.map(song => {
        let songId = song.id;
        let actionId = parseInt(action.id, 10);

        if (songId === actionId) {
          // console.log(song.id);
          song.vote-=1;
        }
        return song;
      })};
      break;
    default:
      state = {...state};
  }
  return state;
}