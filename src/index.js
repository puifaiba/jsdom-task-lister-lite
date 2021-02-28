document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form");
  const newTaskInput = document.querySelector("#new-task-description");
  const taskList = document.querySelector("#tasks");

  taskForm.addEventListener("submit", addTask);

  function addTask(event) {
    event.preventDefault();

    task = document.createElement("li");
    task.textContent = newTaskInput.value;
    taskList.append(task);

    event.target.reset();
  }
});
