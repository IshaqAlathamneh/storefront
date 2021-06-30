import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) =>({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  form: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
  },
}));

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const state = useSelector(state => state.cart)

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          You Have {state.length} items
        </Typography>
        {state.map(el => {
            return (

        <Typography variant="h5" component="h2">
        {bull} {el.quentity} {el.item} with price: {el.price}$ -- Total {el.quentity*el.price}$
        </Typography>
            )
        })}
        
        <Typography variant="body2" component="p">
        <form className={classes.form} noValidate autoComplete="off">
        <div>
        <TextField label="first name" id="standard-size-small" size="small" />
        <TextField label="last name" id="standard-size-small" size="small" />
      </div>
      <div>
        <TextField label="adress" id="standard-size-small" size="small" />
        <TextField label="zip code" id="standard-size-small" size="small" />
      </div>
      <div>
        <TextField label="Credit card#" id="standard-size-small" size="small" />
        <TextField label="CVV" id="standard-size-small" size="small" />
      </div>
        </form>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">Place Your Order</Button>
      </CardActions>
    </Card>
  );
}