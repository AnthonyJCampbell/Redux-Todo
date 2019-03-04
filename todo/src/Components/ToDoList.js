import React from 'react';
import { connect } from 'react-redux';
import { addToDo, markCompleted } from './../Actions/actions';
import Add from './Add';

const ToDoList = (props) => {
    return (
        <div>
            <ul>
                {props.todos.map((todo,idx) => {
                    return (
                        <li key={idx}>{todo.value}</li>
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
    { addToDo, markCompleted}
    )(ToDoList);
