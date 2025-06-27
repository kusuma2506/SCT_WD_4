const taskInput = document.getElementById('taskInput');
const taskDateTime = document.getElementById('taskDateTime');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    const taskDate = taskDateTime.value;

    if (!taskText) {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    const taskInfo = document.createElement('div');
    taskInfo.classList.add('task-info');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const taskDateSpan = document.createElement('small');
    taskDateSpan.textContent = taskDate ? `Due: ${taskDate}` : 'No Date Set';

    taskInfo.appendChild(taskContent);
    taskInfo.appendChild(taskDateSpan);

    li.appendChild(taskInfo);

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.onclick = () => li.classList.toggle('completed');

    const editBtn = document.createElement('button');
    editBtn.textContent = '✎';
    editBtn.onclick = () => {
        const newTask = prompt("Edit Task:", taskContent.textContent);
        if (newTask) taskContent.textContent = newTask;
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑';
    deleteBtn.onclick = () => li.remove();

    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
    taskDateTime.value = '';
}