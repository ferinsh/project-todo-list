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
    const projectTodo = document.createElement('div');

    projectTitle.classList.add('project-item-title-holder');
    projectTodo.classList.add('project-item-todo-holder');

    projectTitle.innerHTML = project.title;
    projectTodo.textContent = project.todoList;   

    projectItem.appendChild(projectTitle);
    projectItem.appendChild(projectTodo);
    projectItemHolder.appendChild(projectItem);

}