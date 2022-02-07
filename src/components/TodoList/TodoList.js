import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({todos, deleteTask}) => {
    if (todos!=undefined){
        const taskList = todos.map( todo => (
            <Todo id = {todo.id} key = {todo.id} title = {todo.title} completed = {todo.completed} deleteTask = {deleteTask}/>
    ))
    return (
        <div data-testid = "todo-list">
            {taskList}
        </div>
    )
    }
    else{
        return (<div data-testid = "todo-list"></div>)
    }
}

export default TodoList;