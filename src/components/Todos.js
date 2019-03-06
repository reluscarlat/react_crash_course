import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    // markComplete = () => {
    //     console.log("ceva")
    // }

    render() {
        return this.props.todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} markComplete=
            {this.props.markComplete} delTodo={this.props.delTodo}/>
        ))
    }
}

// PropTypes good practice
Todos.prototypes = {
    todos: PropTypes.array.isRequired

}

export default Todos;