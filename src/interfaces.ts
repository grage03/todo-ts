
    // ANCHOR Interface of Component Props

export interface TodoInputProps {
    addTodoItem(title: string): void,
};

export interface TodoListProps {
    todoList: TodoType[],
    changeCompleteTodoItem(id: number): void,
    deleteTodoItem(id: number): void
};

export interface ModalTodoItemDeleteProps {
    showModalTodoItemDelete: boolean,
    setShowModalTodoItemDelete(value: boolean): void,
    deleteTodoItem(id: number): void,
    currentTodoItemId: number
}

    // ANCHOR Type of Object

export type TodoType = {
    id: number,
    text: string,
    isCompleted: boolean
};