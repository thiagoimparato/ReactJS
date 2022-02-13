import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <div className="d-flex justify-content-end">
            <Typography variant='h3'>
                <img className="w-25 mt-2" src='/images/logo.png'/>
            </Typography>
            
            <Link to="/" className="text-decoration-none btn btn-danger m-2">
                <Button color="inherit">Loja</Button>
            </Link>
            <Link to="/contato" className="text-decoration-none btn btn-danger m-2">
                <Button color="inherit">Contato</Button>
            </Link>
            <Cart />   
            </div>


            
        </Grid>
    )
}

export default Header;
