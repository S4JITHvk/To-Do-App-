import { useState } from "react";
import Swal from "sweetalert2"
import Todolist from "./Todolist";
import "../App.css"

const AddTodo=()=>{
    const [todolist, setTodolist] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addNewTask = () => {
    if (newTask.trim() !== "") {
        const newTodo = {
            id: Date.now(), 
            task: newTask.trim(),
            status: false, 
          };
      setTodolist([...todolist, newTodo ]);
      setNewTask("");
    } else {
      Swal.fire({
        title: 'oops',
        text: 'Please Add Some Task..',
        icon: 'Warning',
        confirmButtonText: 'OK'
      });
    }
  }
  const deleteTask = (id) => {
    const updatedList = todolist.filter(task => task.id !== id);
    setTodolist(updatedList);
  };

  const updateTask = (id, updatedTask) => {
    const updatedList = todolist.map((task) =>
      task.id === id ? { ...task, task: updatedTask } : task
    );
    setTodolist(updatedList);
  };

  const updateStatus = (id) => {
    const updatedList = todolist.map((task) =>
      task.id === id ? { ...task, status: true } : task
    );
    setTodolist(updatedList);
  };
  

  const pendingTasksCount = todolist.filter((task) => !task.status).length;

  return (
    <div>
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
  < Todolist list={todolist} deleteTask={deleteTask} updateTodo={updateTask} changeStatus={updateStatus} />
  <div className="footer">
        <span>You have {pendingTasksCount} pending tasks</span>
        <button onClick={() => setTodolist([])}>Clear All</button>
      </div>
  </div>
  
 ) 
}

export default AddTodo