export default function showProjectInfo(viewArea, project) {
    console.log('showProjectInfo');

    console.log(viewArea, project.todoList);

    const projectItemsList = document.querySelectorAll('.project-item');
    console.log(projectItemsList);
    while(viewArea.firstChild){
        viewArea.removeChild(viewArea.firstChild);
    }

    const detailMain = document.createElement('div');
    detailMain.classList.add('detail-main');
    
    const header = document.createElement('div');
    header.classList.add('header-viewArea');

    const backBtn = document.createElement('button');
    backBtn.classList.add('viewArea-buttons');
    backBtn.id = 'viewArea-backBtn';
    backBtn.textContent = "BACK";

    const detailHolder = document.createElement('div');
    detailHolder.classList.add('viewArea-detail');
    detailHolder.id = 'viewArea-detail';

    header.appendChild(backBtn);
    detailMain.appendChild(header);
    detailMain.appendChild(detailHolder);

    viewArea.appendChild(detailMain, detailHolder);

    createProjectInfo(project);

    backBtn.addEventListener("click", () => {
        console.log("Pressed");
        const project = document.getElementById("btn-project");
        project.click();
    })

}

function createProjectInfo(project) {
    console.log(project);
    const holder = document.getElementById('viewArea-detail');
    console.log(holder);

    const titleHolder = document.createElement('div');
    titleHolder.classList.add('detail-holder-title');
    titleHolder.id = 'detail-holder-title';
    titleHolder.innerHTML = project.title;

    const todoScreen = document.createElement('div');
    todoScreen.classList.add('todo-screen');

    console.log(project.todoList);
    for(let i = 0; i < project.todoList.length; i++) {
        console.log(project.todoList[i]);
        createTodoItem(project.todoList[i], todoScreen);
    }

    holder.appendChild(titleHolder);
    holder.appendChild(todoScreen);
}

function createTodoItem(item, screen){
    console.log(screen);
    const todoItem = document.createElement('div');
    todoItem.classList = 'show-project-todo';
    console.log(item);

    const title = document.createElement('div');
    const dueDate = document.createElement('div');
    const description = document.createElement('div');
    const priority = document.createElement('div');

    title.classList.add('project-todo-title');
    dueDate.classList.add('project-todo-due-date');
    description.classList.add('project-todo-description');
    priority.classList.add('project-todo-priority');

    title.innerHTML = item.title;
    dueDate.innerHTML = item.dueDate;
    description.innerHTML = item.description;
    priority.innerHTML = item.priority;
    
    todoItem.appendChild(title);
    todoItem.appendChild(dueDate);
    todoItem.appendChild(description);
    todoItem.appendChild(priority);

    screen.appendChild(todoItem);
}