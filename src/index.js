import React from 'react';
import ReactDom from 'react-dom/client';
import {Provider} from 'react-redux';
import {createStore} from 'redux'


import App from './components/App';
import reducers from './components/reducers';

const root = ReactDom.createRoot(document.querySelector('#root'))

root.render(
  
    <React.StrictMode>
      <Provider store={createStore(reducers)}>
         <App />
      </Provider >
    </React.StrictMode>

  );