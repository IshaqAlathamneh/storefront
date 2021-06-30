import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link, BrowserRouter as Router} from 'react-router-dom'
import Cart from './cart';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      textDecoration: 'none',
      color: 'white'
    }
  }));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            <Router>
            <Link to="/" className={classes.link}>
            Ishaq's Store
            </Link>
            </Router>
          </Typography>
            <div>
              
                <Cart/>
              
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}