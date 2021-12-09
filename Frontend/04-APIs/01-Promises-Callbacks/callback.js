/* 
    A function that takes in another function 
    as a parameter is a callback function 
*/

// Sleep function
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function getTodos(callback) {
  sleep(3000);
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

// Callback hell
getTodos((todos) => {
  processTodo(todos, (filteredTodos) => {
    console.log(filteredTodos);
  });
});
