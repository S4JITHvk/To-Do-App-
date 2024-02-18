// import "./App.css";
import { useState } from "react";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [newTask, setNewTask  ] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addNewTask = () => {
    console.log("hello")
    if (newTask.trim() !== "") {
      setTodolist([...todolist, newTask.trim()]);
      setNewTask("");
      console.log("Todo=>>",todolist)
    }
  };
  

  const deleteTask = (taskName) => {
    const newTodoList = todolist.filter((task) => task !== taskName);
    setTodolist(newTodoList);
  };

  return (
    <div className="wrapper">
      <header>Todo App</header>
      <div className="inputField">
        <input
          type="text"
          placeholder="Add your new todo"
          value={newTask}
          onChange={handleChange}
        />
        <button onClick={addNewTask}>
        <i className="fa fa-solid fa-plus"></i>
        </button>
      </div>
      <ul className="todoList">
        {todolist.map((task, index) => (
        
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(task)}><i className="fa-solid fa-trash"></i></button>
          </li>
       
        ))}
      </ul>
      <div className="footer">
        <span>You have {todolist.length} pending tasks</span>
        <button onClick={() => setTodolist([])}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
