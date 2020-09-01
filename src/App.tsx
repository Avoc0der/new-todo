import React from 'react'
import './App.scss'
import TodoList from './components/TodoList'

const App: React.FC = (): JSX.Element => {
    return (
        <div className="App">
            <TodoList />
        </div>
    )
}

export default App
