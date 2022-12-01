// Selectors
const todoInput = document.querySelector(".form__input");
const todoBtn = document.querySelector(".form__btn");
const todoList = document.querySelector(".todo-list");
const filterSelect = document.querySelector(".filter__select");

// Event Listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", checkAndDelete);
filterSelect.addEventListener("change", filterTodo);
document.addEventListener("DOMContentLoaded", showTodos);

// Functions
function addTodo(e) {
  e.preventDefault();

  const todoText = todoInput.value.trim();

  if (todoText) {
    // Create new Todo
    createTodo(todoText);

    // Add todo to localStorage
    saveTodoLocally(todoText, false);

    // Clear the input
    todoInput.value = "";

    filterTodo();

    checkEmpty();
  }
}

function createTodo(todo, completed = false) {
  const todoDiv = document.createElement("div");
  if (completed) {
    todoDiv.classList.add("todo", "todo--completed");
  } else {
    todoDiv.classList.add("todo");
  }

  const todoItem = document.createElement("li");
  todoItem.classList.add("todo__item");
  todoItem.innerText = todo;
  todoDiv.appendChild(todoItem);

  const checkBtn = document.createElement("button");
  checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkBtn.classList.add("todo__btn", "todo__btn--check");
  todoDiv.appendChild(checkBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.classList.add("todo__btn", "todo__btn--delete");
  todoDiv.appendChild(deleteBtn);

  // Append new todo to the todo list
  todoList.appendChild(todoDiv);
}

function checkAndDelete(e) {
  const clickedItem = e.target;

  const todo = clickedItem.parentElement;

  // Toggle Complete
  if (
    clickedItem.classList.contains("todo__btn--check") &&
    todo.classList.contains("todo--completed")
  ) {
    todo.classList.remove("todo--completed");
    updateLocalTodo(todo.firstChild.innerText, false);
  } else if (
    clickedItem.classList.contains("todo__btn--check") &&
    !todo.classList.contains("todo--completed")
  ) {
    todo.classList.add("todo--completed");
    updateLocalTodo(todo.firstChild.innerText, true);
  }
  // Delete Todo
  else if (clickedItem.classList.contains("todo__btn--delete")) {
    deleteTodoLocally(todo.firstChild.innerText);

    // Animating
    todo.classList.add("todo--falling");

    // Remove todo after finishing the animation
    todo.addEventListener("transitionend", () => {
      todo.remove();
      checkEmpty();
    });
  }

  filterTodo();
}

function filterTodo() {
  const type = filterSelect.value;
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    switch (type) {
      case "completed":
        todo.classList.contains("todo--completed")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none");
        break;

      case "uncompleted":
        !todo.classList.contains("todo--completed")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none");
        break;

      default:
        todo.style.display = "flex";
    }
  });

  checkEmpty();
}

function getLocalTodos() {
  let todos;
  // Check if there todos already
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  return todos;
}

function updateLocalTodo(todoBody, status) {
  let todos = getLocalTodos();

  todos = todos.map((todo) =>
    todo.body === todoBody ? { ...todo, complete: status } : todo
  );

  localStorage.setItem("todos", JSON.stringify(todos));
}

function showTodos() {
  let todos = getLocalTodos();

  todos.forEach((todo) => createTodo(todo.body, todo.complete));

  checkEmpty();
}

function saveTodoLocally(todoText, complete) {
  let todos = getLocalTodos();

  const todo = {
    body: todoText,
    complete: complete,
  };

  todos.push(todo);

  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodoLocally(selected) {
  let todos = getLocalTodos();

  todos = todos.filter((todo) => todo.body !== selected);

  localStorage.setItem("todos", JSON.stringify(todos));
}

function checkEmpty() {
  const emptyText = document.querySelector(".todo-empty");

  if (todoList.clientHeight) {
    emptyText.style.display = "none";
  } else {
    // empty
    emptyText.style.display = "block";
  }
}

// localStorage.clear();
