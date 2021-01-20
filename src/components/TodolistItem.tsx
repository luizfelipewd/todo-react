import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { TodoContextType } from '../contexts/TodoContextType'
import { Todo } from '../models/Todo'

interface TodoListItemProps {
    todo: Todo
}

const TodolistItem = (props: TodoListItemProps) => {

    const { removeTodo, toggle} = useContext<TodoContextType>(TodoContext)

    const onRemove = (todo: Todo) => {
        removeTodo(todo)
    }

    const handleChange = (event: any) => {
        toggle(props.todo)
    }

    return (
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input type="checkbox" className="uk-checkbox" checked={props.todo.done} onChange={handleChange}/>
                </label>
            </td>
            <td className="uk-width-expand">{props.todo.title}</td>
            <td className="uk-width-auto">
                <button className="uk-icon-button uk-button-danger" uk-icon="icon: trash; ratio: 0.8" onClick={() => onRemove(props.todo)}></button>
            </td>
        </tr>
    )
}

export default TodolistItem
