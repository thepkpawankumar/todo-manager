import React, { useState, useContext } from "react";
import {v4 as uuid} from 'uuid'
import {TodoForm, TodoList} from "../components/Todos";
import { Link } from "@material-ui/core";
import { TodoService } from "../services/TodoService";
import { TodoContext } from "../context/Todo";

const Todos = () => {
  return (
    <>
    <TodoContext.Provider value={TodoService()}>
    <TodoForm  />
    <TodoList  />
    </TodoContext.Provider>
  </>

);
}

export default Todos;