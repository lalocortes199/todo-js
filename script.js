const tasksContainer = document.getElementById('tasksContainer');

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const eliminarDivsDone = () => {
    const divsDone = document.querySelectorAll('.done');
    divsDone.forEach(div => div.remove());
};

const botonEliminarDone = document.getElementById('removerdone');
botonEliminarDone.addEventListener('click', eliminarDivsDone);
