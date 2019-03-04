import React from 'react';
import { connect } from 'react-redux';
import { addToDo, markCompleted } from './../Actions/actions';

const ToDoList = (props) => {
    return (
        <div>
            <ul>
                {props.todos.map((todo,idx) => {
                    return (
                        <li key={idx}>{todo}</li>
                    )
                })}
            </ul>
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
