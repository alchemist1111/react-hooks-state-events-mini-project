import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filter, setFilter] = useState("All");

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filterTasks = (category) => {
    setFilter(category);
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}
        filter={filter}
        setFilter={filterTasks}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask}/>
      <TaskList tasks={tasks} filter={filter} onDeleteTask={deleteTask}/>
    </div>
  );
}

export default App;
