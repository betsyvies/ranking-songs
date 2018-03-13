import { connect } from 'react-redux'
import SongsOrder from './components/SongsOrder'
import { moreVotes, minusVotes } from '../../actions/actions'

const SongsOrderWithRedux = connect(
  function mapStateToProps(state) {
    // buscamos los valores que nos interesan para el SearchBar
    // fíjate que el SearchBar no tiene por qué saber nada de los productos
    const {
      showSongs
    } = state.AppReducer;

    console.log(state.AppReducer)
    // y devolvemos las nuevas props
    return {
      songs: showSongs,
    }
  },
  // El segundo parámetro de `connect` es `mapDispatchToProps`.
  // El el mundo Redux al llamar a un `action creator` lo único que obtenemos
  // es un objeto que expresa que es lo que ha sucedido, pero no dispara la acción.
  // Para esto necesitas llamar a la función `dispatch` del store.
  // Esto es lo que hace `mapDispatchToProps` mapea llamadas a `dispatch` para
  // tus `action creators`
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