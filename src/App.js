import React, { Component } from 'react';
import './App.css';
import './components/Todos'
import Todos from './components/Todos';
// import TodoItem from './components/TodoItem';

class App extends Component {
  state = {
    todos : [
      {
        id:1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id:2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id:3,
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    console.log('From app.js '+id)
    this.setState({ todos : this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <h1> App </h1>
        <Todos todos={this.state.todos} markComplete = {this.markComplete} />
      </div>
    );
  }
}

export default App;
