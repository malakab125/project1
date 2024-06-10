document.getElementById('task-form').addEventListener('submit',function(event){
    event.preventDefault();

    const taskInput = document.getElementById('EnterTask');
    const taskList = document.getElementById('listOftasks');

    if (taskInput.value.trim() !== "") {
        const newTask = document.createElement('li');
        newTask.textContent = taskInput.value;
        newTask.style.display = 'none';  // Initially hide the task
        taskList.appendChild(newTask);
        
        // Clear the input field
        taskInput.value = "";

        // Use jQuery's slideDown effect to reveal the task
        $(newTask).slideDown();
    }
})