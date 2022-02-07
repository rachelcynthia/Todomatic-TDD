import React, { useState } from 'react';

const TodoForm = ({addTask}) => {

    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(name)
        setName("")
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return(
        <div>
            <input type = "text" data-testid = "new-todo" value = {name} onChange={handleChange}></input>
            <button type = "submit" data-testid = "submit-todo" onClick={handleSubmit}>Add Todo</button>
        </div>
    )
}

export default TodoForm
