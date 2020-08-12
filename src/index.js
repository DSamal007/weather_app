import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

//subscribe method to get the store value
// store.subscribe(()=>{console.log(store.getState(),"store.getstate")});

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>      
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
