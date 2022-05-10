import {
    AppBar,
    Button,
    makeStyles,
    Toolbar,
    Link,
    Typography,
  } from '@material-ui/core';
  import React, { useContext } from 'react';
  import { useNavigate  } from 'react-router-dom';
  import * as ROUTES from '../constants/routes';
  import { AppwriteContext } from "./Appwrite";

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
  
    const appwrite = useContext(AppwriteContext);

    let isLoggedin = localStorage.getItem("isLoggedin");

    const handleLogout = () => {
      appwrite.logout().then((result) => {

        localStorage.removeItem("isLoggedin");
      }).catch((error) => {

        alert('Something went wring with your request')
        console.log('Error', error);
      }).finally(() => {

        navigate(ROUTES.HOME, { replace: true });
      });

     
    };

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
                 navigate(ROUTES.HOME, { replace: true });
                }}
              >
                Todo Manager
              </Link>
            </Typography>
            {isLoggedin ? (
            <>
              <Button color="inherit" onClick={() => navigate(ROUTES.HOME, { replace: true })}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate(ROUTES.TODOS, { replace: true })}>
                Todos
              </Button>
              <Button color="inherit" onClick={handleLogout}>Sign Out</Button>
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