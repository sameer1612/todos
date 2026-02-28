const todos = [];

function addTodo(newTodo) {
  todos.push(newTodo);
}

function listTodos() {
  console.log("Your todos are:");
  for (let i = 0; i < todos.length; i++) {
    console.log(`${i}. ${todos[i]}`);
  }
  console.log("---------------");
}

function deleteTodo(index) {
  todos.splice(index, 1);
}

console.log("Welcome to my todo app 😌");
while (true) {
  const command = prompt("What would you like to do?");

  if (command === "new" || command === "n") {
    const todo = prompt("Enter your todo");
    addTodo(todo);
  } else if (command === "list" || command === "l") {
    listTodos();
  } else if (command === "delete" || command === "d") {
    const index = parseInt(prompt("Enter index of todo to delete!"));
    deleteTodo(index);
  } else if (command === "quit" || command === "q") {
    console.log("Thank you for using our app. 🙏🏼");
    break;
  } else {
    alert("Invalid command!");
  }
}
