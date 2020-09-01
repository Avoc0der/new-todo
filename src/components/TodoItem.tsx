import React, { ChangeEvent, FormEvent, useState } from 'react'
import { TodoItemProps } from './Types'

const TodoItem: React.FC<TodoItemProps> = ({
    task,
    id,
    completed,
    deleteTodo,
    updateTodo,
    toggleTodo,
}): JSX.Element => {
    const [edit, setEdit] = useState<boolean>(false)
    const [updateTask, setUpdateTask] = useState<string>(task)

    const handleDelete = (): void => {
        deleteTodo(id)
    }

    const handleEdit = (): void => {
        setEdit((prev) => !prev)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setUpdateTask(e.target.value)
    }

    const handleToggle = (): void => {
        toggleTodo(id)
    }

    const handleUpdate = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (updateTask === '') {
            return
        }
        updateTodo(id, updateTask)
        setUpdateTask(updateTask)
        setEdit((prev) => !prev)
    }

    let result
    if (edit) {
        result = (
            <div className="todo-list-item">
                <form className="todo-list-edit-form" onSubmit={handleUpdate}>
                    <input
                        onChange={handleChange}
                        name="task"
                        type="text"
                        value={updateTask}
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    } else {
        result = (
            <div className="todo-list-item">
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                <li
                    onClick={handleToggle}
                    className={`todo-list-task ${completed && 'completed'}`}
                >
                    {task}
                </li>
                <div className="todo-list-btns">
                    <button onClick={handleEdit} type="button">
                        <i className="fas fa-pen" />
                    </button>
                    <button onClick={handleDelete} type="button">
                        <i className="fas fa-trash" />
                    </button>
                </div>
            </div>
        )
    }
    return result
}

export default TodoItem
