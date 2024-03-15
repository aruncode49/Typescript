import "./style.css";

const todoForm = document.querySelector(".todo-form") as HTMLFormElement;
const todoInput = document.querySelector("input") as HTMLInputElement;
const todoContainer = document.querySelector(
  ".todo-container"
) as HTMLDivElement;

interface Todo {
  title: string;
  isComplete: boolean;
  id: string;
}

const todos: Todo[] = [];

todoForm.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();

  if (todoInput.value === "") return;

  // create todo object
  let todo: Todo = {
    title: todoInput.value,
    isComplete: false,
    id: String(Math.random() * 1000),
  };

  // push todo in array
  todos.push(todo);
  renderTodo();
});

// create elements and append in todoContainer
const createTodoAndRender = (
  title: string,
  isComplete: boolean,
  id: string
) => {
  const todo = document.createElement("div");
  todo.className = "todo";

  todo.innerHTML = `<input type="checkbox" class="checkbox" ${
    isComplete && "checked"
  } />
      <p class=${isComplete && "cutline"}>${title}</p>
    <button class="deleteBtn">X</button>`;

  const todoCheckBox = todo.querySelector(".checkbox") as HTMLInputElement;

  const todoTitle = todo.querySelector("p") as HTMLParagraphElement;

  // checkbox
  todoCheckBox.onchange = () => {
    todos.find((item) => {
      if (item.id === id) {
        item.isComplete = todoCheckBox.checked;
      }
    });
    todoTitle.className = todoCheckBox.checked ? "cutline" : "";
  };

  // delete
  const deleteBtn = todo.querySelector(".deleteBtn") as HTMLButtonElement;

  deleteBtn.onclick = () => {
    deleteTodo(id);
  };

  todoContainer.append(todo);
  todoInput.value = "";
};

// delete Todo
const deleteTodo = (id: string) => {
  const todoIndex = todos.findIndex((item) => item.id === id);
  todos.splice(todoIndex, 1);
  renderTodo();
};

// render todo
const renderTodo = () => {
  todoContainer.innerHTML = "";
  todos.forEach((item) => {
    createTodoAndRender(item.title, item.isComplete, item.id);
  });
};
