import React, { useState } from "react";
import AddTask from "../components/Tasks/AddTask";
import Task from "../components/Tasks/Task";
import { Link } from "@material-ui/core";

const Tasks = () => {

  const [tasks, setTasks] = useState([]);
  return (
    <>
    <AddTask makeTasks={(task) => setTasks([...tasks, task])} />
    {tasks.map((task, index) => {
      return <Task taskNo={index} task={task} key={index} />;
    })}
  </>

);
}

export default Tasks;