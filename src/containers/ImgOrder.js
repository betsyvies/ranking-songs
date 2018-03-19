import { connect } from 'react-redux';
import ImgOrder from '../components/ImgOrder';

const ImgOrderRedux = connect(
  function mapStateToProps(state) {
    // buscamos los valores que nos interesan
    const {
      showSongs
    } = state.AppReducer;

    return {
      songs: showSongs
    };
  }
)(ImgOrderComponent);

export default ImgOrderRedux;