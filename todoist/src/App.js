import React from 'react';
import TodoApp from './components/TodoApp';
import './App.css';

class App extends React.Component {
  render(){
    return(
      <div className="App">
      <h1>Todo List</h1>
      <TodoApp />
      </div>
    )
  }
}

export default App;
