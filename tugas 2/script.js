document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        
        li.innerHTML = `
            ${taskValue}
            <button class="delete-btn" onclick="deleteTask(this)">Hapus</button>
        `;
        
        taskList.appendChild(li);
        taskInput.value = ''; // Clear the input
    } else {
        alert('Masukkan tugas!');
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

