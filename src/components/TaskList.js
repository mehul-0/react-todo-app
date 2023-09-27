import { TaskRow } from "./TaskRow";

export const TaskList = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskListRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} comp={showCompleted} />
      ));
  };
  return (
      <ul>{taskListRows(showCompleted)}</ul>
  );
};