//rafce shortcut to create a functional component in VS code

import React, { useState, useContext } from "react";
import { FormControl, Container, Button, TextField, Snackbar } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { TodoContext } from "../../context/Todo";
import { Alert } from "@material-ui/lab";

const TodoForm = () => {
  
   const { addTodo } = useContext(TodoContext);
    const [title, SetTitle] = useState("");
    const [open, setOpen] = useState(false);
    const createTodo = e => {
        e.preventDefault();

        addTodo(title);
        SetTitle("");
        if (title.trim()) setOpen(true);
    }

    const ref = React.useRef();

    return (
        <div ref={ref}>
          <Container maxWidth="sm">
            <form onSubmit={createTodo}>
              <FormControl fullWidth={true}>
                <TextField
                  label="I will do this"
                  variant="standard"
                  onChange={e => SetTitle(e.target.value)}
                  value={title}
                  required={true}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ marginTop: 5 }}
                >
                  <Add />
                  Add
                </Button>
              </FormControl>
            </form>
          </Container>
          <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
          <Alert
          elevation={6}
          variant="filled"
          onClose={() => setOpen(false)}
          severity="success"
          >
          Successfully added item!
          </Alert>
          </Snackbar>
        </div>
      );
}

export default TodoForm
