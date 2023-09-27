import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { useState, useEffect } from "react";
import { TaskList } from "./components/TaskList";
import { VisibilityControl } from "./components/VisibilityControl";
import {Container} from "./components/Container";

function App() {
  const [tasksItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  function createTask(taskName) {
    if(taskName===""){
      alert("Enter some task.");
    }
    else if (!tasksItems.find((task) => task.name === taskName)) {
      setTaskItems([...tasksItems, { name: taskName, done: false }]);
    } else {
      alert("The task already exist");
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => {
    setTaskItems([]);   
    
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <div className="container">
      <Container>
        <TaskCreator createTask={createTask} cleanTasks={cleanTasks}/>
        <TaskList tasks={tasksItems} toggleTask={toggleTask} />
        <VisibilityControl
            setShowCompleted={(checked) => setShowCompleted(checked)}
            isChecked={showCompleted}
        />
        {showCompleted === true && (
            <TaskList
                tasks={tasksItems}
                toggleTask={toggleTask}
                showCompleted={showCompleted}
            />
        )}
      </Container>
    </div>
  );
}

export default App;
