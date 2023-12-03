export default function createTodoObject(title, dueDate, description, priority) {

    class TodoObject {
        constructor (_title, _dueDate, _desc, _priority) {
            this.title = _title;
            this.dueDate = _dueDate;
            this.desc = _desc;
            this.priority = _priority;
        }
    }

    return new TodoObject(title, dueDate, description, priority);
}