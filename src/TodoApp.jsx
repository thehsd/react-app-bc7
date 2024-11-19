import { useState } from "react";
import TaskItem from "./TaskItem";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(false);

  const addTask = (event) => {
    if (event.key === "Enter") {
      const newTask = {
        title: event.target.value,
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      };
      const newArrayTasks = [...tasks];
      newArrayTasks.push(newTask);
      setTasks(newArrayTasks);
    }
  };

  const handleClick = () => {
    setShowTasks(!showTasks);
  };

  return (
    <>
      <input type="text" onKeyUp={(e) => addTask(e)} placeholder="add task" />
      <button onClick={handleClick}>show tasks</button>
      <br />
      {/* {showTasks ? <p>salam</p> : ""} */}
      {/* {showTasks && <p>salam</p>} */}
      {showTasks && (
        <ul>
          {tasks.map((item) => {
            return <TaskItem key={item.id} title={item.title} />;
          })}
        </ul>
      )}
    </>
  );
};
// conditional rendering
export default TodoApp;
