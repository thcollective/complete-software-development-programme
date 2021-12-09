// A promise always return something. Either resolve or reject

function getTodos() {
  return new Promise((ok, error) => {
    let todos = ["Todo 1", "Todo 2", "Todo 3", "hello"];
    if (todos.length === 4) {
      ok(todos);
    } else {
      error();
    }
  });
}

function processTodos(todos) {
  return new Promise((resolve, reject) => {
    let badWords = ["hello"];
    for (let i = 0; i < todos.length; i++) {
      if (badWords.includes(todos[i])) {
        todos.splice(i, 1);
      }
    }
    resolve(todos);
  });
}

function showTodos(todos) {
  console.log(todos);
}

// promise hell
getTodos()
  .then((todos) => {
    processTodos(todos).then((filteredTodos) => {
      showTodos(filteredTodos);
    });
  })
  .catch(() => {
    console.log("Error");
  });
