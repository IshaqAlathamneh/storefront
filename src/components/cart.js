import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import CancelIcon from '@material-ui/icons/Cancel';
import { remove } from '../store/cart'
import { toggle } from '../store/button'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles((theme) => ({
    title: {
        color: 'white',
    },
    manue: {
        right: 20,
        top: 65
    }
}));
export default function SimpleMenu(props) {
    const data = useSelector(state => {
        return {
            items: state.cart,
            button: state.button
        }
    })
    const dispatch = useDispatch({ toggle, remove })
    const handleClose = (e) => {
        dispatch(remove(e))
    };

    const classes = useStyles();
    return (
        <div>
            <Button className={classes.title} aria-controls="simple-menu" aria-haspopup="true" onClick={(e) => dispatch(toggle())}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                ><ShoppingCartIcon /></IconButton> ({data.items.length})
            </Button>
            <Menu
                id="simple-menu"
                // anchorEl={data.button}
                keepMounted
                open={Boolean(data.button)}
                onClose={(e) => dispatch(toggle())}
                className={classes.manue}
                style={{marginLeft: 1350, marginTop: -250 }}
            >
                {
                    data.items.map((item, idx) => {
                        return (<MenuItem key={idx}>
                            {item.name} ({item.quantity}) <Button onClick={() => handleClose(item)}><CancelIcon /></Button>
                        </MenuItem>)
                    })
                }
            </Menu>
        </div>
    );
}