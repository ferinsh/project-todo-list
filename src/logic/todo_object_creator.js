export default function createTodoObject(title, dueDate, desc) {

    class TodoObject {
        constructor (_title, _dueDate, _desc) {
            this.title = _title;
            this.dueDate = _dueDate;
            this.desc = _desc;
        }
    }

    return new TodoObject(title, dueDate, desc);
}