import './style.css';
import contentLoader from './content_loader/content-loader';
import contentViewLoader from './content_loader/content-view-loader';
import createTodoObject from "./logic/todo_object_creator";
import createFormInMenu from './create-form-in-menu';


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content loaded');
    const container = document.querySelector('#container');
    const contentView = document.querySelector('#content-view');
    
    container.appendChild(contentLoader());



    //load todo content view
    let todoObjectArray = [];        

    todoObjectArray.push(new createTodoObject('Run', '25/06/2002', 'Keep running', 1));
    todoObjectArray.push(new createTodoObject('Sleep', '25/06/2002', 'Sleep away', 2));
    
    
    contentViewLoader(todoObjectArray);
    
    const btnAddTask = document.querySelector('#btn-add-task');
    console.log(btnAddTask);

    //create form
    

    createFormInMenu();

    /* --BUTTONS-- */

    const taskForm = document.getElementById('add-task-form');
    const btnSubmit = document.getElementById('btnSubmit');
    const btnCancel = document.getElementById('btnCancel');
    const btnTodoSelector = document.querySelectorAll('.todo-holder');
    const btnHeaderCancel = document.getElementById('header-button-cancel');
    const btnHeaderDelete = document.getElementById('header-button-delete');
    const headerBtnHolder = document.getElementById('header-buttons-holder');
    console.log(headerBtnHolder);
    console.log(btnHeaderCancel);
    



    btnHeaderCancel.addEventListener('click', () => {
        
        //code to be added
        
    });

    btnHeaderDelete.addEventListener('click', () => {
        const choice = prompt("Enter task title");
        for(let i = 0; i < todoObjectArray.length; i++){
            if(todoObjectArray[i].title === choice){
                delete todoObjectArray[i];
            }
        }
        const filtered = todoObjectArray.filter(function (el) {
            return el != null;
        });
        todoObjectArray = filtered
        console.log(filtered);
        console.log(todoObjectArray);

        contentViewLoader(todoObjectArray);
    });
    

    btnAddTask.addEventListener('click', () => {
        taskForm.style.display = 'flex';
        
    });

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();


        function addTask(todoObject){
            const title = document.getElementById('form-title').value;
            const dueDate = document.getElementById('form-due-date').value;
            const description = document.getElementById('form-description').value;
            const priority = document.getElementById('form-priority').value;
            console.log(description);
            todoObject.push({ title, dueDate, description, priority});
            console.log(todoObject);
            
            contentViewLoader(todoObject);
        }


        addTask(todoObjectArray);
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