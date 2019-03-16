import React from 'react';
import Header from './components/Header';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import './index.css';

const App = () => (
  <div className="app-container">
    <Header />
    <AddTodo />
    <VisibleTodoList />
  </div>
);

export default App;
