import { Box, LinearProgress, Stack, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../../Component/Navbar/Navbar'
import { useFilterContext } from '../Context/FilterContext';
import ProductsFilter from './ProductsFilter';
import ProductsList from './ProductsList';
import ProductSort from './ProductSort';
const Products = () => {


    return (
        <Box sx={{ width: { xs: '96%', sm: '60%', md: '62%' }, m: 'auto' }}>
            <Stack direction="row" spacing={15} mt={5} >
                <Box flex={1} >
                    <ProductsFilter> </ProductsFilter>
                </Box>
                <Box flex={4} >
                    <ProductSort ></ProductSort>
                    <ProductsList></ProductsList>
                </Box>

            </Stack>

        </Box>

    );
};

export default Products;