import { combineReducers } from 'redux'
import songs from './songs'
import counter from './reducer-img'

const songApp = combineReducers({
  counter, 
  songs
})

export default songApp