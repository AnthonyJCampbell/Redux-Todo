import React from 'react';
import { connect } from 'react-redux';

const ToDoList = () => {
    return (
        <div>
            
        </div>
    );
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps, {})(ToDoList)