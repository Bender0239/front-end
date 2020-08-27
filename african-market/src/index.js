import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {appReducer as reducer} from './reducers/appReducer'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';


const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>  
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

