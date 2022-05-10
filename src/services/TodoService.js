import { useState, useEffect } from "react";
import {v4 as uuid} from 'uuid'

export const TodoService = () => {
    const [todos, setTodos] = useState(
      JSON.parse(localStorage.getItem("todos")) || []
    );
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  
    const addTodo = (title) => {
      if (title.trim()) {
        const newTodo = {
          id: uuid(),
          title,
          completed: false
        };
        const orderTodos = [newTodo, ...todos];
        orderStarAndComplete(orderTodos);
        setTodos(orderTodos);

      }
    };
    const editTodo = (id, text) =>  {
      if (!(text === null) && text.trim()) {
        setTodos(
          todos.map((todo) => {
            if (todo.id === id) todo.title = text;
            return todo;
          })
        );
      }
    };
    const markComplete = (id) => {
      const orderTodos = todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      });
      orderStarAndComplete(orderTodos);
      setTodos(orderTodos);
    };  
    const orderStarAndComplete = (todos) => {
      todos.sort((x, y) => x.completed - y.completed);
    };
  
    const deleteTodo = (id) =>
      setTodos(todos.filter((todo) => todo.id !== id));
    const deleteAll = () => setTodos([]);
 
    return {
        todos,
        setTodos,
        markComplete,
        deleteTodo,
        deleteAll,
        editTodo,
        addTodo
    }
  };