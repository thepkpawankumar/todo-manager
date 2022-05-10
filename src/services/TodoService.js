import { useState, useEffect } from "react";
import {v4 as uuid} from 'uuid'
import { Appwrite } from 'appwrite';
import {config} from '../config';

// Get Appwrite instance
const appwrite = new Appwrite();
appwrite
.setEndpoint(config.endpoint)
.setProject(config.projectId);;

export const TodoService = () => {

    const [todos, setTodos] = useState([]);
  
    useEffect(() => {

      let todosCollectionPromise = appwrite.database.listDocuments(config.todosCollectionId);
      todosCollectionPromise.then(function (response) {

        let todos = response.documents || [];
        let orderTodos = todos.map(todo => {
            return  {
              id: todo.$id,
              title: todo.title,
              completed: todo.completed
            }
        });

        orderComplete(orderTodos);
        setTodos(orderTodos);
    }, function (error) {
        console.log(error, "faliure"); // Failure
    });
  
    }, []);
  
    const addTodo = (title) => {

      if (title.trim()) {

      let todosCollectionPromise = appwrite.database.createDocument(config.todosCollectionId, uuid(), {
        title,
        completed: false

      });

      todosCollectionPromise.then(function (response) {
        
        let newTodo = {
          id: response.$id,
          title: response.title,
          completed: response.completed
        };
        const orderTodos = [newTodo, ...todos];
        orderComplete(orderTodos);
        setTodos(orderTodos);
        
      }, function (error) {
        console.log(error); // Failure
      });
 
    }
    };
    const editTodo = (id, text) =>  {
      if (!(text === null) && text.trim()) {
      let todosCollectionPromise = appwrite.database.updateDocument(config.todosCollectionId, id, {
        title: text

      });

      todosCollectionPromise.then(function (todo) {
        
        setTodos(
          todos.map((todo) => {
            if (todo.id === id) todo.title = text;
            return todo;
          })
        );

      }, function (error) {
        console.log(error); // Failure
      });
     
      }
    };
    const markComplete = (id) => {
      
      let todo = todos.find(todo => todo.id === id);
      let todosCollectionPromise = appwrite.database.updateDocument(config.todosCollectionId, id, {
        completed: !todo.completed
      });

      todosCollectionPromise.then(function (updatedTodo) {
        const orderTodos = todos.map((todo) => {
          if (todo.id === id) todo.completed = updatedTodo.completed;
          return todo;
        });
        orderComplete(orderTodos);
        setTodos(orderTodos);

      }, function (error) {
        console.log(error); // Failure
      });
    };  
    const orderComplete = (todos) => {
      todos.sort((x, y) => x.completed - y.completed);
    };
  
    const deleteTodo = (id) => {
      let todosCollectionPromise = appwrite.database.deleteDocument(config.todosCollectionId, id);

      todosCollectionPromise.then(function (deletedTodo) {
        setTodos(todos.filter((todo) => todo.id !== id));
      }, function (error) {
        console.log(error); // Failure
      });
    }

    return {
        todos,
        setTodos,
        markComplete,
        deleteTodo,
        editTodo,
        addTodo
    }
  };