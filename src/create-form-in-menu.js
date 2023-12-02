function createFormField(form, labelName, inputID, inputType) {
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.textContent = labelName;
    input.id = inputID;
    input.type = inputType;
    label.setAttribute('for', inputID);
    form.appendChild(label);
    form.appendChild(input);
}

function createFormButtons(form) {
    const formButtons = document.createElement('div');
    formButtons.classList.add('form-buttons');

    const btnSubmit = document.createElement('button');
    const btnCancel = document.createElement('button');
    btnSubmit.textContent = 'Submit';
    btnCancel.textContent = 'Cancel';
    btnSubmit.id = 'btnSubmit';
    btnCancel.id = 'btnCancel';

    formButtons.appendChild(btnSubmit);
    formButtons.appendChild(btnCancel);
    form.appendChild(formButtons);
    
}



export default function createFormInMenu(){
    const menu = document.querySelector('.content-menu');
        
    const addTaskForm = document.createElement('form');
    addTaskForm.classList.add('add-task-form');
    addTaskForm.id = 'add-task-form';
    createFormField(addTaskForm, 'title', 'form-title', 'text');
    createFormField(addTaskForm, 'due date', 'form-due-date', 'date');
    createFormField(addTaskForm, 'description', 'form-description', 'text');
    createFormField(addTaskForm, 'priority', 'form-priority', 'number');
    createFormButtons(addTaskForm);

    menu.appendChild(addTaskForm);
    return addTaskForm;
}