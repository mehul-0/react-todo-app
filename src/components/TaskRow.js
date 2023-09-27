export const TaskRow = ({ task, toggleTask , comp}) => {
    return (
        <li className={comp?"comp":""} onClick={()=>{toggleTask(task);}}>
          {task.name}
        </li>
    );
};
  