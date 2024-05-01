import React from "react";
import Task from "./Task";

function TaskList({ tasks, filter, onDeleteTask }) {
  const filteredTasks = filter === "All" ? tasks : tasks.filter((task) => task.category === filter);
  return (
    <div className="tasks">
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
