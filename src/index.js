import './style.css';
import contentLoader from './content_loader/content-loader';
import contentViewLoader from './content_loader/content-view-loader';
import createTodoObject from "./logic/todo_object_creator";
import createFormInMenu from './create-form-in-menu';
import contentViewProjectLoader from './content_loader/content-view-project-loader.js';
import createProjectCardObject from './content_loader/project-files/projectCardObject.js';
import createProjectForm from './createProjectForm.js';



document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content loaded');
    const container = document.querySelector('#container');
    
    container.appendChild(contentLoader());
    const contentView = document.querySelector('#content-view');
    console.log(contentView);


    //load todo content view
    let todoObjectArray = [];        
    todoObjectArray.push(new createTodoObject('Run', '25/06/2002', 'Keep running', 1));
    todoObjectArray.push(new createTodoObject('Sleep', '25/06/2002', 'Sleep away', 2));
    console.log(todoObjectArray);

    var todoProjectTaskArray = [];
    const todoprojectArray = [];
    todoprojectArray.push(createProjectCardObject(1, [2,3]));
    
    
    contentViewLoader(todoObjectArray);
    
    const btnAddTask = document.querySelector('#btn-add-task');
    console.log(btnAddTask);

    //create form
    

    createFormInMenu();
    createProjectForm();
    console.log("1234");
    console.log(todoObjectArray);

    /* --BUTTONS-- */

    const taskForm = document.getElementById('add-task-form');
    const btnSubmit = document.getElementById('btnSubmit');
    const btnCancel = document.getElementById('btnCancel'); 
    const btnHeaderCancel = document.getElementById('header-button-cancel');
    const btnHeaderDelete = document.getElementById('header-button-delete');
    const headerBtnHolder = document.getElementById('header-buttons-holder');
    const btnReset = document.getElementById('btn-reset');
    const btnTodo = document.getElementById('btn-todo');
    const btnProject = document.getElementById('btn-project');
    const btnProjectAddTask = document.getElementById('addTask-project-form');
    const btnProjectSubmit = document.getElementById('submit-project-form');
    const btnProjectCancel = document.getElementById('cancel-project-form');

    console.log(btnProject);
    
    console.log("1234");
    console.log(todoObjectArray);

    btnTodo.addEventListener('click', () => {
        contentView.classList.remove('content-view-project');
        contentView.classList.add('content-view');
        contentViewLoader(todoObjectArray);

    });


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
    
    btnReset.addEventListener('click', (e) => {
        for(var i = 0; i <= todoObjectArray.length; i++) {
            todoObjectArray.pop();
        }
        console.log(todoObjectArray);
        contentViewLoader(todoObjectArray);
    });

    btnProject.addEventListener('click', () => {
        contentViewProjectLoader(todoprojectArray);
        console.log("1234");
        console.log(todoObjectArray);
    });

    btnProjectAddTask.addEventListener('click', (e) => {
        e.preventDefault();
        
        console.log('Hi');
        const todoTask = document.getElementById('project-form-todolist');
        console.log(todoTask);
        //todoProjectTaskArray.push(todoTask.value);
        for(var i = 0; i < todoObjectArray.length; i++){
            if((todoTask.value) == (todoObjectArray[i].title)){
                todoProjectTaskArray.push(todoObjectArray[i]);
            }
        }

        todoTask.value = "";
        

    });

    btnProjectSubmit.addEventListener("click", (e) =>{
        e.preventDefault();
        console.log("Hello");
        const title = document.getElementById('project-form-title');
        console.log(title.value);
        todoprojectArray.push(createProjectCardObject(title.value, todoProjectTaskArray));
        console.log(todoprojectArray);
        contentViewProjectLoader(todoprojectArray);
        todoProjectTaskArray = []
        document.querySelector('#project-form').style.display = 'none';
        console.log(todoprojectArray);
    })

    btnProjectCancel.addEventListener('click', (e) => {
        e.preventDefault();
        const taskForm = document.querySelector('#project-form');
        taskForm.reset();
        taskForm.style.display = 'none';
    })


    //----------------------------------------------------------------
});