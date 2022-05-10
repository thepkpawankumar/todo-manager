import {
    AppBar,
    Button,
    makeStyles,
    Toolbar,
    Box,
    Link,
    Typography,
  } from '@material-ui/core';
  import React, { useContext } from 'react';
  import { useNavigate  } from 'react-router-dom';
  import * as ROUTES from '../constants/routes';
  import AuthUserContext from '../context/Session';

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  export default function Navigation() {
    const classes = useStyles();
    const navigate  = useNavigate();
  
    const {authUser} = useContext(AuthUserContext);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link
                color="inherit"
                href="#"
                underline="none"
                onClick={(e) => {
                  e.preventDefault();
                 navigate(ROUTES.LANDING, { replace: true });
                }}
              >
                Task Manager
              </Link>
            </Typography>
            {authUser ? (
            <>
            {authUser.name && (
                <Box mr={3}>
                  <Typography variant="h6" color="inherit">
                    Hello, {authUser.name}
                  </Typography>
                </Box>
              )}
              <Button color="inherit" onClick={() => navigate(ROUTES.HOME, { replace: true })}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate(ROUTES.TASKS, { replace: true })}>
                Tasks
              </Button>
              <Button color="inherit">Sign Out</Button>
            </>
            ) : (
                <>
                 <Button
                color="inherit"
                onClick={() => navigate(ROUTES.SIGN_UP, { replace: true })}
              >
                Sign Up
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate(ROUTES.SIGN_IN, { replace: true })}
              >
                Sign In
              </Button>
                </>
          )}
           
          </Toolbar>
        </AppBar>
      </div>
    );
  }