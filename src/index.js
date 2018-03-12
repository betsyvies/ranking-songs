import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import './components/global/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers'

const store = createStore(
  reducers,
)

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
