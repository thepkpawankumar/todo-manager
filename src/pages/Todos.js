import React from "react";
import {TodoForm, TodoList} from "../components/Todos";
import { TodoService } from "../services/TodoService";
import { TodoContext } from "../context/Todo";

const Todos = () => {
  return (
    <>
    <TodoContext.Provider value={TodoService()}>
    <TodoForm />
    <TodoList  />
    </TodoContext.Provider>
  </>

);
}

export default Todos;