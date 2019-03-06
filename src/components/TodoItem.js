import React , {Component} from "react"
import PropTypes from 'prop-types'

class TodoItem extends Component {
    getStyle = ()=> {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through':'none'
        }
    }

    // markCompleted = () => {
    //     console.log("cevaaaa")
    // }

    render() {
        const {id, title} = this.props.todo;
        return(
            // inline css style
            // <div style={{ backgroundColor: '#f4f4f4' }}>
            /* <div style={itemStyle}></div> */

            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete
                    .bind(this, id)} /> {' '}
                    {title} 
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }

}

//PropTypes
TodoItem.prototypes = {
    todo: PropTypes.object.isRequired
}

//CSS style const

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

const btnStyle={
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;