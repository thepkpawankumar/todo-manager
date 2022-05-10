import React from "react";
import { Card, CardContent, Typography, Container } from "@material-ui/core";

const Task = ({ task, taskNo }) => {
  return (
    <Container>
      <Card
        className="root"
        variant="outlined"
        style={{ marginTop: 35, background: "lightgray" }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            {taskNo + 1}.&nbsp;{task}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Task;