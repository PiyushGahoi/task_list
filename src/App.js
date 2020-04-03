import React from 'react';
import './App.css';
import TaskList from './Containers/TaskList/TaskList';
// import { createStore } from 'redux';
// import { createStore, compose, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import reducer from './Reducer';
// import { storageMiddleware } from './middleware/storage'
// import { createStorageListener } from './utils/storage-listener'

// const enhancer = compose(applyMiddleware(storageMiddleware()))

// // const store=createStore(reducer);
// const store = createStore(reducer, enhancer)

// window.addEventListener('storage', createStorageListener(store))


function App() {
  return (
    // <Provider store={store}>
      <TaskList/>
    // </Provider>
  );
}

export default App;
