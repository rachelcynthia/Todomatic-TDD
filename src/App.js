import { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import{ nanoid }from "nanoid";

function App() {
  
  const [tasks, setTasks] = useState([])

  const addTask = (name) => {
    const newTask = { id: "todo-" + nanoid(), title: name, completed: false };
    setTasks([...tasks, newTask]);
}

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter(task => id!== task.id)
    setTasks(remainingTasks);
  }
  
  return (
    <div>
      <h1 data-testid = "app-heading">TodoMatic</h1>
      <TodoList todos = {tasks} deleteTask = {deleteTask}></TodoList>
      <TodoForm addTask = {addTask}/>
    </div>
  );
}

export default App;
