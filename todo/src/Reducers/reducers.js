import { ADD_TODO, MARK_COMPLETED } from './../Actions/actions';

function uniqueID() {
    let count = 0;
    return function () {
        count++;
    }
}
const id = uniqueID();

const initialState = {
    todos: ["dsa",],
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
                    id: id()
                })
            };
        case MARK_COMPLETED:
        // Fill in the body of this case
            return {count: state.count - 1};
        default:
            return state;
  }
};
