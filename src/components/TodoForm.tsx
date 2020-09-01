import React, { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TodoFormProps } from './Types'

const TodoForm: React.FC<TodoFormProps> = ({ createTodo }): JSX.Element => {
    const [task, setTask] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (task === '') {
            return
        }
        createTodo({ id: uuidv4(), task, completed: false })
        setTask('')
    }

    return (
        <form className="todo-list-form" onSubmit={handleSubmit}>
            <label htmlFor="task">New Todo</label>
            <input
                type="text"
                id="task"
                placeholder="New Todo"
                value={task}
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    )
}

export default TodoForm
