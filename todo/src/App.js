import React, { Component } from 'react';
import Header from './Components/Header';
import TodoList from './Components/ToDoList';
import Add from './Components/Add';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoList />
        <Add />
      </div>
    );
  }
}

export default App;
