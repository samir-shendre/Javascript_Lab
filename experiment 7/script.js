// DOM Selection
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", function () {

    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Create task text
    const span = document.createElement("span");
    span.textContent = taskValue;
    span.className = "task-text";

    // Create Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    // Create Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Edit functionality
    editBtn.addEventListener("click", function () {

        // DOM Traversal
        // Edit Button → Parent LI → First Child (Task)
        const task = this.parentElement.firstElementChild;

        const updatedTask = prompt(
            "Enter updated task:",
            task.textContent
        );

        if (updatedTask !== null && updatedTask.trim() !== "") {

            // DOM Update
            task.textContent = updatedTask.trim();
        }
    });

    // Delete functionality
    deleteBtn.addEventListener("click", function () {

        // DOM Traversal
        // Delete Button → Parent LI

        const taskItem = this.parentElement;

        // DOM Update
        taskItem.remove();
    });

    // Add elements to LI
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Add LI to UL
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
});