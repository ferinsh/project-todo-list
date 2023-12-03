export default function createProjectCardObject(title, todoList) {
    class ProjectCard{
        constructor(_title, _todoList){
            this.title = _title;
            this.todoList = _todoList;
        }
    }

    return new ProjectCard(title, todoList);
}