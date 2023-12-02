import createButtons from "./create-button";

export default function contentLoader() {
    const containerContent = document.createElement('div');
    containerContent.classList.add('container-content');
    
    /* -Create Header- */
    const contentHeader = document.createElement('h1');
    contentHeader.classList.add('content-header');
    
    const headerTitle = document.createElement('div');
    headerTitle.classList.add('header-title');
    headerTitle.innerText = 'Project: Todo List';

    const headerBtns = document.createElement('div');
    headerBtns.classList.add('header-buttons-holder');
    headerBtns.id = 'header-buttons-holder';

    const headerBtnCancel = document.createElement('button');
    headerBtnCancel.classList.add('header-button');
    headerBtnCancel.textContent = 'Cancel';
    headerBtnCancel.id = 'header-button-cancel';

    const headerBtnDelete = document.createElement('button');
    headerBtnDelete.classList.add('header-button');
    headerBtnDelete.textContent = 'Delete';
    headerBtnDelete.id = 'header-button-delete';

    headerBtns.appendChild(headerBtnCancel);
    headerBtns.appendChild(headerBtnDelete);
    contentHeader.appendChild(headerTitle);
    contentHeader.appendChild(headerBtns);


    /* -Create Content- */
    const content = document.createElement('div');
    const contentMenu = document.createElement('div');
    const contentView = document.createElement('div');

    content.classList.add('content');
    contentMenu.classList.add('content-menu');
    contentView.classList.add('content-view');
    contentMenu.id = 'content-menu';
    contentView.id = 'content-view';
    
    /* -Create Buttons- */
    createButtons(contentMenu)
        
    //load content view


    /* -Add menu and view area to Content- */
    content.appendChild(contentMenu);
    content.appendChild(contentView);

    /* -Add Content to container- */
    containerContent.appendChild(contentHeader);
    containerContent.appendChild(content);

    return containerContent;
}