import './style.css';
import contentLoader from './content_loader/content-loader';
import contentViewLoader from './content_loader/content-view-loader';
import createTodoObject from "./logic/todo_object_creator";
import createFormInMenu from './create-form-in-menu';


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content loaded');
    const container = document.querySelector('#container');
    
    container.appendChild(contentLoader());



    //load todo content view
    const todoObjectArray = [];        

    todoObjectArray.push(new createTodoObject('Run', '25/06/2002', 'Keep running', 1));
    todoObjectArray.push(new createTodoObject('Sleep', '25/06/2002', 'Sleep away', 2));
    
    
    contentViewLoader(todoObjectArray);
    
    const btnAddTask = document.querySelector('#btn-add-task');
    console.log(btnAddTask);

    //create form
    

    createFormInMenu();

    //---

    const taskForm = document.getElementById('add-task-form');

    btnAddTask.addEventListener('click', () => {
        taskForm.style.display = 'flex';
    });

    const btnSubmit = document.getElementById('btnSubmit');
    const btnCancel = document.getElementById('btnCancel');

    

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();

        const title = document.getElementById('form-title').value;
        const dueDate = document.getElementById('form-due-date').value;
        const description = document.getElementById('form-description').value;
        const priority = document.getElementById('form-priority').value;

        todoObjectArray.push({ title, dueDate, description, priority});
        
        contentViewLoader(todoObjectArray);
        taskForm.reset();
        taskForm.style.display = 'none';
    });

    btnCancel.addEventListener('click', (e) => {
        e.preventDefault();

        taskForm.reset();
        taskForm.style.display = 'none';
    });
    

    //----------------------------------------------------------------
});