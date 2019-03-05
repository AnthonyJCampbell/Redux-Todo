import React from 'react';
import { connect } from 'react-redux';
import { addToDo, markCompleted } from './../Actions/actions';
import Add from './Add';
import styled from 'styled-components';

const StyledToDo = styled.li`
    p {
        text-decoration: ${props => (props.completed ? "line-through" : "none")};
    }
`;

const ToDoList = (props) => {
    console.log(props)
    return (
        <div>
            <ul>
                {props.todos.map((todo) => {
                    return (
                        <StyledToDo completed={todo.complete} key={todo.id}>
                            <p  onClick={() => props.markCompleted(todo.id)}>{todo.value}</p>
                        </StyledToDo>
                        
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
