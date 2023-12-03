import showProjectInfo from "./showProjectInfo.js";

export default function displayProject(_project){
    console.log(_project);
    const projectItemHolder = document.getElementById('project-item-holder');
    console.log(projectItemHolder.firstChild);
    while (projectItemHolder.firstChild){
        projectItemHolder.removeChild(projectItemHolder.firstChild);
    }

    console.log(projectItemHolder);
    
    for(var i = 0; i < _project.length; i++) {
        createProjectCard(_project[i], projectItemHolder);
    }

    
}

function createProjectCard(project, projectItemHolder){
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');

    const projectTitle = document.createElement('div');
    const projectTodo = document.createElement('button');

    projectTitle.classList.add('project-item-title-holder');
    projectTodo.classList.add('project-item-todo-holder');

    projectTitle.innerHTML = project.title;
    projectTodo.textContent = "SHOW PROJECT";
    projectTodo.id = project.title;

    projectItem.appendChild(projectTitle);
    projectItem.appendChild(projectTodo);
    projectItemHolder.appendChild(projectItem);

    projectTodo.addEventListener('click', () => {
        console.log(projectTodo);
        const viewArea = document.querySelector('#project-item-holder');
        console.log(viewArea);
        //viewArea.style.display = 'none';
        console.log(project.todoList);
        
        showProjectInfo(viewArea, project);
    });

}