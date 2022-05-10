import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {
  Link,
  Typography
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4)
  },
  contentWrapper: {
    marginTop: theme.spacing(2)
  }
}));

export default function Home() {
const classes = useStyles();
return (

<Container component="main">

<div className={classes.paper}>
<Typography component="h1" variant="h4">Todo Manager</Typography>
<div className={classes.contentWrapper}>
<Typography paragraph={true}>
    This project was bootstrapped with <Link  color="inherit" href="https://github.com/facebook/create-react-app">Create React App </Link>.
    It uses material ui for design and  <Link  color="inherit" href="https://appwrite.io/">Appwrite</Link> for backend.
    It performs simple CRUD operations using Appwrite database API.
</Typography>
<Typography paragraph={true}>You can learn more in the <Link  color="inherit" href="https://facebook.github.io/create-react-app/docs/getting-started">Create React App documentation</Link>.</Typography>
<Typography paragraph={true}>To learn React, check out the <Link  color="inherit" href="https://reactjs.org/" >React documentation</Link>.</Typography>
<Typography paragraph={true}> To learn Appwrite, check out the <Link  color="inherit" href="https://appwrite.io/">Appwrite documentation</Link></Typography>
</div>
</div>
</Container>
);

}