

function createTodoHolder(todoObject) {
    const todoHolder = document.createElement('div');
    todoHolder.classList.add('todo-holder');
    console.log(todoHolder);

    const title = document.createElement('div');
    const dueDate = document.createElement('div');
    const desc = document.createElement('div');

    todoHolder.appendChild(title);
    todoHolder.appendChild(dueDate);
    todoHolder.appendChild(desc);

    title.id = 'todoHolder-title';
    dueDate.id = 'todoHolder-dueDate';
    desc.id = 'todoHolder-desc';

    title.innerHTML = todoObject.title;
    dueDate.innerHTML = todoObject.dueDate;
    desc.innerHTML = todoObject.desc;
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
        contentView.appendChild(createTodoHolder(todoArray[i]));
    }

    
    
}

