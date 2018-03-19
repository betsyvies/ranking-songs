import { connect } from 'react-redux'
import SongsOrder from '../components/SongsOrder'
import { moreVotes, minusVotes } from '../actions/actions'

const SongsOrderWithRedux = connect(
  function mapStateToProps(state) {
    const {
      showSongs
    } = state.AppReducer;

    console.log(state.AppReducer)
    // y devolvemos las nuevas props
    return {
      songs: showSongs,
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      setMoreVotes(id) {
        dispatch(moreVotes(id))
      },
      setMinusVotes(id) {
        dispatch(minusVotes(id))
      }
    }
  }
)(SongsOrder)

export default SongsOrderWithRedux