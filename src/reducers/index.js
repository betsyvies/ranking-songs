import { combineReducers } from 'redux'
import songs from './songs'

const songApp = combineReducers({
  songs
})

export default songApp