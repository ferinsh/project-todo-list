import createButtons from "./create-button";

export default function contentLoader() {
    const containerContent = document.createElement('div');
    containerContent.classList.add('container-content');
    
    /* -Create Header- */
    const contentHeader = document.createElement('h1');
    contentHeader.classList.add('content-header');
    contentHeader.innerText = 'Project: Todo List';

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