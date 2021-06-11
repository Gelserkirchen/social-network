
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialNetworkApp from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './redux/redux-store';


export const rerenderEntireTree = (state) => {
  ReactDOM.render(
      <SocialNetworkApp/>,
    document.getElementById('root')
  );
}

// window.store = store
rerenderEntireTree(store.getState())

// reportWebVitals();


