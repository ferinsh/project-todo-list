
function createFormField(form, labelName, inputID, inputType){ 
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.textContent = labelName;
    input.id = inputID;
    input.type = inputType;
    label.setAttribute('for', inputID);
    form.appendChild(label);
    form.appendChild(input);
}

function createFormButtons(form){
    const addtask = document.createElement('button');
    const submit = document.createElement('button');
    const cancel = document.createElement('button');

    addtask.textContent = 'Add task';
    submit.textContent = 'Submit';
    cancel.textContent = 'Cancel';
    addtask.id = 'addTask-project-form';
    submit.id = 'submit-project-form';
    cancel.id = 'cancel-project-form';

    form.appendChild(addtask);
    form.appendChild(submit);
    form.appendChild(cancel);
}


export default function createProjectForm() {
    const menu = document.getElementById('content-menu');
    console.log(menu);

    const projectForm = document.createElement('form');
    projectForm.classList.add('project-form');
    projectForm.id = 'project-form';
    createFormField(projectForm, "title", "project-form-title", "text");
    createFormField(projectForm, "todo-list-title", "project-form-todolist", "Text");
    createFormButtons(projectForm);

    menu.appendChild(projectForm);
}