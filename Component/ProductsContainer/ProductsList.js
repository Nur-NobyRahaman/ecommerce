import { Box } from '@mui/material';
import React from 'react';
import { useFilterContext } from '../Context/FilterContext';
import ProductGrid from '../ProductGrid';
import ProductList from '../ProductList';

const ProductsList = () => {
    const {gridView,filterProducts}=useFilterContext()
    return (
        <Box>
            {
                (gridView === true) ?<ProductGrid products={filterProducts}></ProductGrid> :<ProductList products={filterProducts}></ProductList>  

            }
        </Box>
    );
};

export default ProductsList;