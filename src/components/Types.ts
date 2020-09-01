export interface TodosItemType {
    id: string
    task: string
    completed: boolean
}
export type TodoItemProps = {
    task: string
    id: string
    completed: boolean
    deleteTodo: (id: string) => void
    toggleTodo: (id: string) => void
    updateTodo: (id: string, updateTask: string) => void
}

export type TodoFormProps = {
    createTodo: (newTodo: TodosItemType) => void
}
