import React, { useState } from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import { TodosItemType } from './Types'

const TodoList: React.FC = (): JSX.Element => {
    const [todos, setTodos] = useState<TodosItemType[]>([])

    const createItem = (newTodo: TodosItemType): void => {
        setTodos([...todos, newTodo])
    }

    const deleteItem = (id: string): void => {
        setTodos(todos.filter((item) => item.id !== id))
    }

    const updateItem = (id: string, updatedTask: string): void => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const toggleCompletion = (id: string) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const todoItem = todos.map((todo) => (
        <TodoItem
            id={todo.id}
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            deleteTodo={deleteItem}
            updateTodo={updateItem}
            toggleTodo={toggleCompletion}
        />
    ))

    return (
        <div className="todo-list">
            <h1>
                Todo List! <span>React + Typescript App</span>
            </h1>
            <ul>{todoItem}</ul>
            <TodoForm createTodo={createItem} />
        </div>
    )
}

export default TodoList
