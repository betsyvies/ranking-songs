import React from 'react';
import PropTypes from 'prop-types';

import RankingList from './RankingList/components';

// toda los datos que Main necesita, ahora los recibimos como props
const Main = ({songs}) => {
  // TODO: Hack para que renderice. Quitar luego de setear Redux.
  return (
    <RankingList songs={songs} />
  )
}

Main.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

export default Main