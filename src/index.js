import React from 'react';
import { render } from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux'
import './components/global/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// import reducer from './reducers'

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

render(
   <App />, 
  document.getElementById('root')
);

registerServiceWorker();
