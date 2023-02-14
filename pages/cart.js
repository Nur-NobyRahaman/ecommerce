import { Box } from '@mui/material';
import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Cart from '../Component/Cart/Cart'

const cart = () => {
    return (
        <Box>
            <Navbar></Navbar>
            <Cart></Cart>
        </Box>
    );
};

export default cart;