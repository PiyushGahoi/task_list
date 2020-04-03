import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducer';
import { storageMiddleware } from './middleware/storage'
import { createStorageListener } from './utils/storage-listener'
import App from './App';
import * as serviceWorker from './serviceWorker';


const enhancer = compose(applyMiddleware(storageMiddleware()))

// const store=createStore(reducer);
const store = createStore(reducer, enhancer)

window.addEventListener('storage', createStorageListener(store))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
