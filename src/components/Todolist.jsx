import React, { useState } from "react";
import "../App.css"


const Todolist = ({ list, deleteTask, updateTodo }) => {
  const [editTaskId, setEditTaskId] = useState(null); 
  const [editedTaskText, setEditedTaskText] = useState(""); 

  const handleEdit = (id, taskText) => {
    setEditTaskId(id);
    setEditedTaskText(taskText);
  };

  const handleSave = () => {
    updateTodo(editTaskId, editedTaskText);
    setEditTaskId(null);
    setEditedTaskText("");
  };

  return (
    <div>
      <ul className="todoList">
        {list.map((task, index) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{fontWeight:"bold"}}>{task.task}</span>
            <div>
              <button onClick={() => handleEdit(task.id, task.task)} style={{ color: 'blue', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', width: "30px" }}>
                <i className="fas fa-edit" style={{ fontSize: '20px' }}></i>
              </button>
              <button onClick={() => deleteTask(task.id)} style={{ color: 'red', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', width: "25px" }}>
                <i className="fa fa-solid fa-trash" style={{ fontSize: '20px' }}></i>
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editTaskId !== null && (
        <EditModal
          taskText={editedTaskText}
          setTaskText={setEditedTaskText}
          onSave={handleSave}
          onClose={() => setEditTaskId(null)}
        />
      )}
    </div>
  );
};

const EditModal = ({ taskText, setTaskText, onSave, onClose }) => {
  return (
    <div className="modal">
      <h2>Edit Task</h2>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={onSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default Todolist;
