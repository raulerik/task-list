const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('#task-list');
const deleteTasks = document.querySelector('#delete-tasks');

taskList.addEventListener('click', deleteTask);
form.addEventListener('submit', addTask);
deleteTasks.addEventListener('click', deleteAllTasks)

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
        }
    }


}

function deleteAllTasks(e) {
    // taskList.innerHTML = ''
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}


