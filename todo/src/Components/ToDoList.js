import React from 'react';
import { connect } from 'react-redux';
import { addToDo, markCompleted } from './../Actions/actions';
import Add from './Add';

const ToDoList = (props) => {
    console.log(props)
    return (
        <div>
            <ul>
                {props.todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            <p onClick={() => props.markCompleted(todo.id)}>{todo.value}</p>
                        </li>
                        
                    )
                })}
            </ul>
            <Add addToDoFunction={props.addToDo}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};
export default connect(
    mapStateToProps, 
    { addToDo, markCompleted }
    )(ToDoList);
