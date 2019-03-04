export const ADD_TODO = "ADD_TODO";
export const MARK_COMPLETED = "MARK_COMPLETED";

export function addToDo(value) {
  return {
    type: ADD_TODO,
    value
  }
}

export function markCompleted(value) {
    return {
        type: MARK_COMPLETED,
        value,
    }
}