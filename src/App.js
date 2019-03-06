import React, { Component } from 'react';
import './App.css';
import './components/Todos';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
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
    this.setState({ todos : this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  // Delete Component
  delTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id!==id)})
  }

  addTodo = (title) => {
    console.log('ceva')
    this.setState({ todos: this.state.todos.push({
      id:4,
      title: this.title,
      completed: false
    })})
  }

  render() {
    return (
      <div className="container">
        <div className="App">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete = {this.markComplete}
          delTodo = {this.delTodo} />
        </div>
      </div>  
    );
  }
}

export default App;
