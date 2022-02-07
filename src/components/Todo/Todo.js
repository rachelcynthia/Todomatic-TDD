import React from 'react';

const Todo = (props) => {

    return(
        <div key = {props.id}>
            <input type = "checkbox" id = {props.id} data-testid = "checkbox" defaultChecked = {props.completed}></input>
            <label data-test-id = "todo-label"> {props.title} </label>
            <span>
                <button type = "submit" data-testid = "delete-todo" onClick={() => props.deleteTask(props.id)}>Delete</button>
            </span>
        </div>
    )
}

export default Todo