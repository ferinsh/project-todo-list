

function createTodoHolder(todoObject) {
    const todoHolder = document.createElement('div');
    todoHolder.classList.add('todo-holder');

    const title = document.createElement('div');
    const dueDate = document.createElement('div');
    const desc = document.createElement('div');
    const priority = document.createElement('div');

    todoHolder.appendChild(title);
    todoHolder.appendChild(dueDate);
    todoHolder.appendChild(desc);
    todoHolder.appendChild(priority);
    todoHolder.id = todoObject.title;

    title.id = 'todoHolder-title';
    dueDate.id = 'todoHolder-dueDate';
    desc.id = 'todoHolder-desc';
    priority.id = 'todoHolder-priority';

    title.innerHTML = todoObject.title;
    dueDate.innerHTML = todoObject.dueDate;
    desc.innerHTML = todoObject.description;
    priority.innerHTML = todoObject.priority;

    console.log(todoObject);
    return todoHolder;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}




export default function contentViewLoader(todoArray) {
    

    const contentView = document.querySelector('#content-view');
    
    removeAllChildNodes(contentView);

    for (var i = 0; i < todoArray.length; i++) {
        console.log(todoArray[i]);
        contentView.appendChild(createTodoHolder(todoArray[i]));
    }

    
    
}

