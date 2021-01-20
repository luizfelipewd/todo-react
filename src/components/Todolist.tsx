import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { TodoContextType } from '../contexts/TodoContextType'
import TodolistItem from './TodolistItem'

const Todolist = () => {
    const {todos} = useContext<TodoContextType>(TodoContext)

    return (
        <table className="uk-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefas</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(
                        todo => (
                            <TodolistItem key={todo.id} todo={todo}/>
                        )
                    )
                }
            </tbody>
        </table>
    )
}

export default Todolist
