// Retrieve elements
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add event listener to form
taskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task !== '') {
    addTask(task);
    taskInput.value = '';
  }
});

// Add a new task to the list
function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task;
  li.addEventListener('click', completeTask);
  taskList.appendChild(li);
}

// Mark a task as completed
function completeTask() {
  this.classList.toggle('completed');
}

// Retrieve tasks from localStorage, or initialize an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render the tasks from localStorage on page load
window.addEventListener('load', function() {
  tasks.forEach(function(task) {
    addTaskToDOM(task);
  });
});

// Add event listener to form
taskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task !== '') {
    addTask(task);
    taskInput.value = '';
  }
});

// Add a new task to the list and localStorage
function addTask(task) {
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  addTaskToDOM(task);
}

// Add a new task to the DOM
function addTaskToDOM(task) {
  const li = document.createElement('li');
  li.textContent = task;
  li.addEventListener('click', completeTask);
  taskList.appendChild(li);
}

// Mark a task as completed
function completeTask() {
  this.classList.toggle('completed');
}

