function getTodos() {
  return new Promise((resolve, reject) => {
    let todos = ["Todo 1", "Todo 2", "Todo 3", "hello"];
    if (todos.length !== 4) reject(new Error("Error getting todos"));
    resolve(todos);
  });
}

function processTodos(todos) {
  return new Promise((resolve, reject) => {
    let badWords = ["hello"];
    todos.forEach(function (todo, i) {
      if (badWords.includes(todo)) {
        todos.splice(i, 1);
      }
    });
    resolve(todos);
  });
}

function showTodos(todos) {
  console.log(todos);
}

// Promise hell (Promises after promises)
const start = () => {
  getTodos()
  .then(todos => {
    processTodos(todos)
    .then((todos) => {
      showTodos(todos)
    })
  })
};

start()