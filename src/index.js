import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addTodo, toggleTodo } from './actions';

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Add mock data to state
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(toggleTodo(2));
store.dispatch(addTodo('Learn about async actions'));
store.dispatch(addTodo('Learn about async flow'));
store.dispatch(addTodo('Learn about middleware'));
store.dispatch(addTodo('Learn about usage with React Router'));
store.dispatch(addTodo('Learn about ref attr'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
