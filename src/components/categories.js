import React from 'react';
import {connect} from 'react-redux';
import {choose} from '../store/categories'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { filter } from '../store/products';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
  },
}));
function Categories(props) {

  const classes = useStyles()

  return (<>
    <Paper square>
      <Tabs
        value="FOOD"
        indicatorColor="primary"
        textColor="primary"
        onChange={(e,v)=> props.choose(v)}
        aria-label="disabled tabs example"
      >
          {props.categories.categories.map( (cate, idx) => {
             return <Tab label={cate} key={idx} value={cate} />
          })}
      </Tabs>
    </Paper>
    <Paper elevation={1} className={classes.title}>
      <h1>{props.categories.active}</h1>
    </Paper>
    </>
  );
}

// 1- add the state to this component props
const mapStateToProps = state => ({
    categories: state.categories
});

// 2- since I have some actions to use: 
// add the actions to the component props
const mapDispatchToProps = {choose};

export default connect(mapStateToProps, mapDispatchToProps)(Categories)