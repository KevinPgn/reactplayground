import React, { useEffect } from 'react'
import { useState } from 'react'

export default function todoApp() {
  

    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'))
        if (storedTodos) {
            setTodos(storedTodos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleChange = (e) => {
        setValue(e.target.value)
    }  


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!value) return alert('Please enter a todo!')

        const todosCopy = [...todos]
        const id = new Date().getTime()
        const text = value

        todosCopy.push({id, text})
        setTodos(todosCopy)
        setValue('')
    }

    const handleDelete = (id) => {
        const todosCopy = [...todos]

        const filtered = todosCopy.filter((todo) => todo.id !== id)
        setTodos(filtered)
    }

    const handleComplet = (e) => {
        e.target.classList.toggle('completed')
    }

    return (
    <>
        <form className="container-todo" onSubmit={handleSubmit}>
            <h1>Todo List</h1>
            <input value={value} type="text" onChange={handleChange} className='todo-add' placeholder='Enter your todo here'/>
        </form>

        <ul>
            {todos.map((todo) => (
                <li key={todo.id} onClick={handleComplet}>{todo.text}
                <button className='todo-delete' onClick={() => handleDelete(todo.id)}>X</button>
                </li>
            ))}
        </ul>
    </>
  )
}
