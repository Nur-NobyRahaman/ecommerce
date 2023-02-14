import { CardMedia, Grid, LinearProgress, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import React from 'react';
import { useProductContext } from './Context/ProductContex';
import FormatPrice from './Helpers/FormatPrice';
import Product from './Product';
import Text from './Text';

const FeatureProduct = () => {
    const { isLoading, featureProduct } = useProductContext()
    if (isLoading) {
        return <Box> <LinearProgress color="error" /></Box>
    }

    return (
        <Box mt={5} mb={5} pt={5} pb={5} sx={{ backgroundColor: '#f5f5f5' }}>
            <Box sx={{ width: { xs: '96%', sm: '60%', md: '62%' }, m: 'auto' }} >
                <Typography fontSize={12} fontWeight={100}>CheckNow</Typography>
                <Typography fontSize={22} fontWeight={'bold'}>Our Feature Services</Typography>
                <Grid container spacing={2} mt={2} >
                    {
                        featureProduct?.map((data, index) =>
                            <Product  key={index} data={data} ></Product>)
                    }
                </Grid>
            </Box>

        </Box>
    );
};

export default FeatureProduct;