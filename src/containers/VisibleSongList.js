import { connect } from 'react-redux'
import { upVotes, downVotes } from '../actions'
import SongsOrder from '../components/SongsOrder'

const getVisibleSongs = (songs) => {
  return songs
}

const mapStateToProps = (state) => ({
  songs: getVisibleSongs(state.songs)
})

const mapDispatchToProps = {
  onSongsMoreClick: upVotes,
  onSongsMinusClick: downVotes
}

const VisibleSongsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsOrder)

export default VisibleSongsList