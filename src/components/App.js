import React from 'react';
import './global/App.css';
import ContainerImg from '../containers/visibleImg';
import ContainerList from './ContainerList';
import reducers from '../reducers'

const App = (props) => (
  <div>
    <ContainerImg store={props.store}/>
    <ContainerList />
  </div>  
);

export default App;
