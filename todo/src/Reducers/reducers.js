import { ADD_TODO, MARK_COMPLETED } from './../Actions/actions';
import { stat } from 'fs';

let counter = 0;
const uniqueID = () => {
        return counter++;
} 
const initialState = {
    todos: [],
}
// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: state.todos.concat({
                    value: action.value,
                    complete: false,
                    id: uniqueID()
                })
            };
        case MARK_COMPLETED:
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.value) {
                        return {
                            value: todo.value,
                            complete: todo.complete ? false : true,
                            id: todo.id
                        }
                    }
                    return todo;
                })
            };
            
            
        default:
            return state;
  }
};
