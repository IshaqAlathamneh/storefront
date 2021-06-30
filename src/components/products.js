import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cart'
import { getRemoteData } from '../store/actions';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 3,
    },
    paper: {
        padding: theme.spacing(2),
        maxWidth: 345,
        margin: 10
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%',
        overflowY: 'scroll'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    img: {
        width: '50%'
    }
}));

const Products = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch({ add })
    useEffect(() => {
        dispatch(getRemoteData())
    }, [])

    const [open, setOpen] = React.useState(false);
    const [info, setInfo] = React.useState({});
    const handleOpen = (b) => {
        setInfo(b)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div className={classes.root}>
            <Grid container spacing={3} direction="row"
                justify="center"
                alignItems="center">


                {
                    props.products.show.map((item, idx) => {


                        return (
                            <Grid item xs={3} key={idx}>
                                <Card className={classes.paper}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image={item.image}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.item}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary" onClick={() => dispatch(add(item))} >
                                            Add To Cart
                                        </Button>
                                        <div>
                                            <Button size="small" type="button" color="primary" onClick={() => handleOpen(item)}>
                                                View Details
                                            </Button>

                                        </div>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )

                    })
                }
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <img src={info.image} className={classes.img} />
                            <h2 id="transition-modal-title">{info.item}</h2>
                            <p id="transition-modal-description">{info.description} and the Category is {info.category}</p>
                            <p id="transition-modal-description">Price: {info.price}$ and there are {info.inventory} items in the store</p>
                        </div>
                    </Fade>
                </Modal>
            </Grid>
        </div>
    )
}


const mapStateToProps = state => ({
    categories: state.categories,
    products: state.products
});

// 2- since I have some actions to use: 
// add the actions to the component props
// const mapDispatchToProps = { filter };

export default connect(mapStateToProps)(Products)