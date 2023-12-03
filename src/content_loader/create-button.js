export default function createButtons(menu) {
    
    //create new buttons here
    const btnTodo = document.createElement('button');
    const btnReset = document.createElement('button');
    const btnAddTask = document.createElement('button');
    const btnProject = document.createElement('button');

    //add class to buttons here
    btnTodo.classList.add('btn-menu');
    btnReset.classList.add('btn-menu');
    btnAddTask.classList.add('btn-menu');
    btnProject.classList.add('btn-menu');

    //add id to buttons here
    btnTodo.id = 'btn-todo';
    btnReset.id = 'btn-reset';
    btnAddTask.id = 'btn-add-task';
    btnProject.id = 'btn-project';
    
    //button modifications here
    btnTodo.innerHTML = 'To Do';
    btnReset.innerHTML = 'Reset';
    btnAddTask.innerHTML = 'Add Task';
    btnProject.innerHTML = 'Project';
    
    menu.appendChild(btnTodo);
    menu.appendChild(btnReset);    
    menu.appendChild(btnAddTask);
    menu.appendChild(btnProject);
}