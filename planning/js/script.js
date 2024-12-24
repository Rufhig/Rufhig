const btnToevoegen = document.querySelector('button');


btnToevoegen.onclick = function Toevoegen(){
  const tbody = document.querySelector('tbody');
  const tr = tbody.insertRow();
  const todo = tr.insertCell();
  const inputTodo = document.querySelector('.todoInput');
  todo.innerText = inputTodo.value;
  const todoDate = tr.insertCell();
  const inputDate =  document.querySelector('.dateInput');
  todoDate.innerText = inputDate.value;
  inputTodo.value = "";
  inputDate.value = "";
  inputTodo.focus();
}