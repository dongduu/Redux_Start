const ADD_TODO = "ADD_TODO";

function addTOdo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}
