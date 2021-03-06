import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Typography,
  Link,
  TextField,
  Grid,
  Container
} from '@material-ui/core';
import { AppwriteContext } from "../../components/Appwrite";
import { useNavigate  } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate  = useNavigate();

  // Get Appwrite instance
  const appwrite = useContext(AppwriteContext);
  // Create event listener
  const onSubmit = (e) => {
    e.preventDefault();
    if ( email === '' || password === '') {
      alert('All fields are required');
      return;
    }

    appwrite.login(email, password).then((result) => {

      localStorage.setItem("isLoggedin", 1);
      navigate(ROUTES.TODOS, { replace: true });

    }).catch((error) => {

      alert('Something went wrong with your request');

      console.log('Error', error);
    });
  }
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
             {/*
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            */}
            <Grid item>
              <Link href="#" variant="body2"
              onClick={(e) => {
                e.preventDefault();
               navigate(ROUTES.SIGN_UP, { replace: true });
              }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}