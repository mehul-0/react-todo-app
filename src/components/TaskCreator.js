import { useState } from "react";

export const TaskCreator = ({ createTask , cleanTasks}) => {
  const [newTaskName, setNewTaskName] = useState("");
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to Delete All tasks?')) {
        cleanTasks();
    }
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      createTask(newTaskName);
      localStorage.setItem("tasks", newTaskName);
      setNewTaskName("");
  };
  return (
    <>
        <button onClick={handleDelete} className="clear">Clear All</button>
        <form onSubmit={handleSubmit}>
            <div className='in'>
                <input
                    type="text"
                    value={newTaskName}
                    placeholder="Enter a new task"
                    onChange={(e) => setNewTaskName(e.target.value)}
                />
                <button className='add'>
                    Add
                </button>
            </div>
        </form>
    </>
  );
};
