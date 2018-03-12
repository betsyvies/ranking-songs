import { connect } from 'react-redux'
import SongsOrder from '../components/SongsOrder'

const getVisibleSongs = (songs) => {
  return songs
}

const mapStateToProps = (state) => ({
  songs: getVisibleSongs(state.songs)
})

const VisibleSongsList = connect(
  mapStateToProps
)(SongsOrder)

export default VisibleSongsList