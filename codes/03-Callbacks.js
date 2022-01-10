/* 
1 - Get all todos
2 - Process those todos & remove profanity
3 - Display todos 
*/
function getTodos(callback) {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  let todos = ["Todo 1", "Todo 2", "Todo 3", "hello"];
  callback(todos);
}

function processTodo(todos, callback) {
  let badWords = ["hello"];
  for (let i = 0; i < todos.length; i++) {
    if (badWords.includes(todos[i])) {
      todos.splice(i, 1);
    }
  }
  callback(todos);
}

// Callback hell (Callbacks after callbacks)
getTodos((todos) => {
  processTodo(todos, (filteredTodos) => {
    console.log(filteredTodos);
  });
});
