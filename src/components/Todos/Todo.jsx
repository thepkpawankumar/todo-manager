import React, { useState, useContext, forwardRef } from "react";
import {Card, CardContent, Grid, Checkbox, Typography, Container, useMediaQuery} from '@material-ui/core'
import { TodoContext } from "../../context/Todo";
import { DeleteConfirm } from "./Actions/DeleteConfirm";
import EditConfirm from "./Actions/EditConfirm";
import ActionsMenu from "./Actions/ActionsMenu";
const Todo = forwardRef(
  ({ todo, index, onDelete, onEdit }, ref) => {

  const { markComplete, deleteTodo, editTodo } = useContext(TodoContext);

    //const checkTodo = () => markComplete(todo.id);
    const delTodo = () => deleteTodo(todo.id);
    //const modifyTodo = () => editTodo(todo.id, todo.title);

    const matches = useMediaQuery("(max-width: 768px)");
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    //const  isDeleteConfirmation = true;

    const todoStyle = todo.completed ? {

        textDecoration: 'line-through'
    }: {

        textDecoration: 'none'
    };

    const styles = {
      card: {
        marginTop: matches ? 20 : 35,
        background: "lightgray",
      },
      icon: {
        float: "right",
        paddingTop: "10px",
      },
      text: {
        wordBreak: "break-word",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        fontWeight: todo.starred ? 600 : "normal",
        fontSize: matches ? "17px" : "24px",
        color: "",
      },
    };


  return (
    <>
      <Container ref={ref}>
          <Card variant="outlined" style={{marginTop: 35, background: "lightGrey"}}>

        <CardContent>
            <Typography variant='h5' component="h2" style={todoStyle}>

              <Grid container alignItems="center" justifyContent="flex-start">
                  <Grid item>
                    <Checkbox
                      checked={todo.completed}
                      color="primary"
                      style={{ marginRight: 5 }}
                      onClick={() => markComplete(todo.id)}
                      centerRipple={false}
                    />
                  </Grid>
                  <Grid item style={{ flex: 2 }}>
                    <div style={styles.text}>{todo.title}</div>
                  </Grid>
                  <Grid item>
                    <ActionsMenu
                      setDeleteOpen={setDeleteOpen}
                      setEditOpen={setEditOpen}
                      todo={todo}
                    />
                  </Grid>
                </Grid>
            </Typography>
        </CardContent>
          </Card>

          <DeleteConfirm
          yes={() => {
            setDeleteOpen(false);
            setTimeout(() => {
              delTodo(todo.id);
              onDelete();
            }, 200);
          }}
          open={deleteOpen}
          close={() => setDeleteOpen(false)}
        />
        <EditConfirm
          yes={(val) => {
            setEditOpen(false);
            setTimeout(() => {
              editTodo(todo.id, val);
              onEdit();
            }, 200);
          }}
          open={editOpen}
          close={() => setEditOpen(false)}
          value={todo.title}
        />

      </Container>
    </>
  )
}
);
export default Todo
