const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('#task-list');
const deleteTasks = document.querySelector('#delete-tasks');

taskList.addEventListener('click', deleteTask);
form.addEventListener('submit', addTask);
deleteTasks.addEventListener('click', deleteAllTasks)
document.addEventListener('DOMContentLoaded', getTasksFromLS)

function addTask(e){
    // input value
    const task = taskInput.value;
    // create <li> element
    const li = document.createElement('li');
    // define <li> CSS class
    li.className = "collection-item";
    // create text value for <li>
    const text = document.createTextNode(task);
    // add text value to <li>
    li.appendChild(text);
    // find <ul> DOM component
    const ul = document.querySelector('.collection');
    // add <li> to <ul>
    ul.appendChild(li);
    // save task value to localstorage
    addTaskToLS(taskInput.value)
    // clear input value
    taskInput.value = '';

    // delete button
    const x = document.createElement("a");
    x.appendChild(document.createTextNode("X"));
    x.setAttribute('href', "#");
    x.className = 'secondary-content';
    li.appendChild(x);

    // delete input value from form input field
    taskInput.value = ""
    // form submit event control
    e.preventDefault();
}

function deleteTask(e) {
    if(e.target.textContent === 'X') {
        if(confirm('Are you sure to delete this task?')) {
            e.target.parentElement.remove()
            let task = e.target.parentElement.textContent.slice(0, length-1)
            deleteTaskToLS(task)
        }
    }


}

function deleteAllTasks(e) {
    // taskList.innerHTML = ''
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.removeItem('tasks')
}

function addTaskToLS(task) {
    let tasks
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
}

function deleteTaskToLS(task) {
    let tasks
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((taskFromLS, index) => {
        if (taskFromLS === task){
            tasks.splice(index, 1)
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function getTasksFromLS() {
    let tasks
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((taskFromLS) => {
        // create <li> element
        const li = document.createElement('li');
        // define <li> CSS class
        li.className = "collection-item";
        // create text value for <li>
        const text = document.createTextNode(taskFromLS);
        // add text value to <li>
        li.appendChild(text);
        // find <ul> DOM component
        const ul = document.querySelector('.collection');
        // add <li> to <ul>
        ul.appendChild(li);
        // delete button
        const x = document.createElement("a");
        x.appendChild(document.createTextNode("X"));
        x.setAttribute('href', "#");
        x.className = 'secondary-content';
        li.appendChild(x);
    })
}