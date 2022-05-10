import React, { useState } from "react";
import { FormControl, Container, Button, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const AddTask = ({ makeTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => setTitle(e.target.value);
  const createTask = (e) => {
    e.preventDefault();
    setTitle("");
    makeTasks(title);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <form onSubmit={createTask}>
          <FormControl fullWidth={true}>
            <TextField
              label="I will do this"
              variant="standard"
              onChange={e => setTitle(e.target.value)}
              required={true}
              value={title}
            />
            <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={description}
            onChange={e => setDescription(e.target.value)}
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
    </div>
  );
};

export default AddTask;