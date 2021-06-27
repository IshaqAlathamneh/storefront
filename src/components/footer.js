import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 3,
    },
    paper: {
        padding: theme.spacing(2),
        maxWidth: 345,
        margin:10,
    },
    bg: {
        backgroundColor: '#eee',
        padding: 50
    }
}));

export default function LabelBottomNavigation() {
    const classes = useStyles();
  return (
    <Grid  container
    direction="column"
    justify="center"
    alignItems="center"
    className={classes.bg} >

    <Typography variant="h5" color="textPrimary"> <CopyrightIcon/> Ishaq Alathamneh <FavoriteIcon /> JavaScript 401-d8</Typography>  
    <Breadcrumbs aria-label="breadcrumb">
    <Typography color="textPrimary">      Material-UI</Typography> 
    <Typography color="textPrimary">Redux</Typography>     
    <Typography color="textPrimary">React</Typography>
  </Breadcrumbs>
    </Grid>
  );
}