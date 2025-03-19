// storing core html elements
const inputBox = document.getElementById("input-box");
const plusBtn = document.querySelector("#plus");
const listContainer = document.getElementById("list-container");
const taskForm = document.getElementById("task-form");

// find fix for loacal storage not displaying stored previous tasks
//use domcontent loaded w defer in the script tag, to make sure the DOM loads properly
document.addEventListener("DOMContentLoaded", function () {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  //clearing the tasks from the previous session, if not deleted, tldr, buggy
  listContainer.innerHTML = "";
  //fragment section for each li creation
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < tasks.length; i++) {
    let taskElement = createTaskElement(tasks[i].text, tasks[i].finished);
    fragment.appendChild(taskElement);
  }
  listContainer.appendChild(fragment);
});

// setting up an event listener, will add function to add to ul for tasks
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});

// function to check validations for duplicates and empty, will alert the user using window.alert
function addTask() {
  let taskText = inputBox.value.trim();

  if (taskText === "") {
    alert("Empty submissions not allowed.");
    return;
  }

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].text.toLowerCase() === taskText.toLowerCase()) {
      window.alert("This task already exists!");
      return;
    }
  }

  let taskElement = createTaskElement(taskText);
  listContainer.appendChild(taskElement);

  saveTask(taskText, false);
  inputBox.value = "";
}

// function to add li to ul
function createTaskElement(taskText, isFinished = false) {
  //implementing the doc fragment here
  let li = document.createElement("li");
  //setting a status icon dependant
  let statusImg = document.createElement("img");
  statusImg.src = isFinished ? "/imgs/checked.png" : "/imgs/dry-clean.png";
  statusImg.alt = "Task Status";
  statusImg.classList.add("status-icon");

  let taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // if its finished, apply a finished class
  if (isFinished) {
    li.classList.add("finished");
  }
  //toggle the status
  li.addEventListener("click", function () {
    li.classList.toggle("finished");
    let finishedStatus = li.classList.contains("finished");
    statusImg.src = finishedStatus
      ? "/imgs/checked.png"
      : "/imgs/dry-clean.png";
    updateTaskStatus(taskText, finishedStatus);
  });
  //delete button to be added with functionality
  let deleteBtn = document.createElement("img");
  deleteBtn.src = "/imgs/delete.png";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", function (event) {
    deleteTask(taskText, event);
    li.remove();
  });

  li.append(statusImg, taskSpan, deleteBtn);

  return li;
}

// function to save to local memory
function saveTask(taskText, isFinished) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].text === taskText) return;
  }

  tasks.push({ text: taskText, finished: isFinished });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// function to update the local memory
function updateTaskStatus(taskText, isFinished) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].text === taskText) {
      tasks[i].finished = isFinished; // Ensure correct state update
      break;
    }
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// function to delete from local memory, uses parent-child relation
function deleteTask(taskText, event) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].text === taskText) {
      tasks.splice(i, 1);
      break;
    }
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));

  let taskItem = event.target.parentNode;
  taskItem.parentNode.removeChild(taskItem);
}
