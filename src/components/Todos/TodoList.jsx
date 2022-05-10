import React, { useState, useContext } from "react";

import Todo from "./Todo";
import { Alert } from "@material-ui/lab";
import { TodoContext } from "../../context/Todo";
import {Snackbar} from '@material-ui/core'

const TodoList = () => {

  const { todos } = useContext(TodoContext);

  const [deleteSnackOpen, setDeleteSnackOpen] = useState(false);
  const [editSnackOpen, setEditSnackOpen] = useState(false);

  return (
    <>
    {todos && todos.map((todo, index) => {
      return <Todo 
      onDelete={() => setDeleteSnackOpen(true)}
        index={index}
        onEdit={() => setEditSnackOpen(true)}
      todo={todo} 
      key={todo.id} />;
    })}

    <Snackbar
    open={deleteSnackOpen}
    autoHideDuration={4000}
    onClose={() => setDeleteSnackOpen(false)}
    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
    <Alert
      elevation={6}
      variant="filled"
      onClose={() => setDeleteSnackOpen(false)}
      severity="success"
    >
      Successfully deleted item!
    </Alert>
    </Snackbar>
    <Snackbar
    open={editSnackOpen}
    autoHideDuration={4000}
    onClose={() => setEditSnackOpen(false)}
    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
    <Alert
      elevation={6}
      variant="filled"
      onClose={() => setEditSnackOpen(false)}
      severity="success"
    >
      Successfully edited item!
    </Alert>
    </Snackbar>

    </>
  )
}

export default TodoList
