import { Grid } from '@mui/material';
import React from 'react';
import Product from '../Product';

const ProductGridView = ({products}) => {
    return (
        <Grid container spacing={2} mt={2} >
        {
            products?.map((data, index) =>
                <Product key={index} data={data}></Product>)
        }
    </Grid>
    );
};

export default ProductGridView;