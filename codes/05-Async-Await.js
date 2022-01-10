async function getTodos() {
  let todos = ["Todo 1", "Todo 2", "Todo 3", "hello"];
  if (todos.length === 4) {
    return todos;
  } else {
    throw "Cant fetch todos. Check ur network";
  }
}

async function processTodos(todos) {
  let badWords = ["hello"];
  for (let i = 0; i < todos.length; i++) {
    if (badWords.includes(todos[i])) {
      todos.splice(i, 1);
    }
  }
  return todos;
}

async function loadData() {
  let todos = await getTodos();
  let filtered = await processTodos(todos);
  console.log(filtered);
}

loadData();
