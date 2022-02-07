import React from 'react';
import { useState } from 'react'
import {nanoid } from 'nanoid';

const TodoMatic = () => {

    const [todoName, setTodoName] = useState("")
    const [todos, setTodos] = useState([])

    const addTodo = (todoTitle) => {
        const newTodo = { id: "todo-" + nanoid(), title: todoTitle, completed: false };
        setTodos([...todos, newTodo]);
    }

    const submitForm = (e) => {
        e.preventDefault();
        addTodo(todoName);
        setTodoName("");

    }

    const handleChange = (e) => {
        setTodoName(e.target.value);
    }

    const deleteTodo = (id) => {
        const remainingTasks = todos.filter(todo => id!== todo.id)
        setTodos(remainingTasks);
    }

    const todoListDisplay = todos.map(todo => (
        <div key = {todo.id} id = {todo.id}>
            <input type = "checkbox" defaultChecked = {todo.completed}></input>
            {todo.title}
            <button id = {todo.id} key = {todo.id} type = "submit" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    ))

    return(
        <div>
            <div>
                <h1>TodoMatic</h1>
                <form data-testid = "todo-form" onSubmit={submitForm}>
                    <input type = "text" data-testid = "todo-input" value = {todoName} onChange = {handleChange} />
                    <button type = "submit" disabled = {todoName === ""} >Add Todo</button>
                </form>
            </div>

            <div data-testid = "todo-list">
                {todoListDisplay}
            </div>

        </div>
    )
};
export default TodoMatic;