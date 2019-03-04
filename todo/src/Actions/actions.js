export const ADD_TODO = "ADD_TODO";
export const MARK_COMPLETED = "MARK_COMPLETED";

export function addToDo(newToDo) {
  return {
    type: ADD_TODO,
    payload: newToDo
  }
}

export function markCompleted(toDo) {
    return {
        type: MARK_COMPLETED,
        payload: toDo,
    }
}