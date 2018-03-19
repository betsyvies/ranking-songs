import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './reducers/store';
import RankingList from './components/index'

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RankingList/>
      </Provider>
    );
  }
}

export default App;
