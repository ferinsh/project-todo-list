import './style.css';
import contentLoader from './content_loader/content-loader';
import contentViewLoader from './content_loader/content-view-loader';
import createTodoObject from "./logic/todo_object_creator";


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content loaded');
    const container = document.querySelector('#container');
    
    container.appendChild(contentLoader());



    //load todo content view
    const todoObjectArray = [];        

    todoObjectArray.push(new createTodoObject('Run', '25/06/2002', 'Keep running'));
    todoObjectArray.push(new createTodoObject('Sleep', '25/06/2002', 'Sleep away'));
    console.log(todoObjectArray);
    
    contentViewLoader(todoObjectArray);
    
    
    const btnAddTask = document.querySelector('#btn-add-task');
    console.log(btnAddTask);

    btnAddTask.addEventListener('click', () => {
        const title = prompt('Add task title');
        const dueDate = prompt('Add task due date');
        const desc = prompt('Add task desc');
        todoObjectArray.push(new createTodoObject(title, dueDate, desc));
        contentViewLoader(todoObjectArray);
        
    });
    console.log(contentViewLoader);

    //----------------------------------------------------------------
});