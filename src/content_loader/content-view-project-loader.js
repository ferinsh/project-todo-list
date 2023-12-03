import createProject from "./project-files/createProject";
import displayProject from "./project-files/displayProject";

export default function contentViewProjectLoader(){
    const contentView = document.getElementById('content-view');
    console.log(contentView);
    removeAllChildNodes(contentView);
    contentView.classList.remove('content-view');
    contentView.classList.add('content-view-project');

    const projectContent = document.createElement('div');
    projectContent.classList.add('content-project-sub-content');
    
    const header = document.createElement('div');
    header.classList.add('content-project-header');
    
    const headerTitle = document.createElement('div');
    headerTitle.classList.add('content-project-header-title');
    headerTitle.innerText = 'PROJECTS';

    

    const projectButtonHolder = document.createElement('div');
    const createProjectBtn = document.createElement('button');
    const deleteProjectBtn = document.createElement('button');

    
    
    createProjectBtn.classList.add('project-buttons');
    deleteProjectBtn.classList.add('project-buttons');
    createProjectBtn.id = 'project-button-create';
    deleteProjectBtn.id = 'project-button-delete';

    createProjectBtn.textContent = 'Create';
    deleteProjectBtn.textContent = 'Delete';

    projectButtonHolder.classList.add('project-button-holder');

    const projectHolder = document.createElement('div');
    projectHolder.classList.add('project-item-holder');


    projectButtonHolder.appendChild(createProjectBtn);
    projectButtonHolder.appendChild(deleteProjectBtn);
    header.appendChild(headerTitle);
    contentView.appendChild(header);
    projectContent.appendChild(projectButtonHolder);
    projectContent.appendChild(projectHolder);
    contentView.appendChild(projectContent);

    displayProject();

    createProjectBtn.addEventListener("click", () => {
        console.log("createProject");
        createProject();
    });
    
    deleteProjectBtn.addEventListener("click", () => {
        console.log("deleteProject");
    });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}