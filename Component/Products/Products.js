import { Box, LinearProgress, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FilterSection from '../FilterSection';
import ProductList from '../ProductList';
import Product from '../Product';
import Sort from '../Sort';
import { useProductContext } from '../Context/ProductContex';
import ProductGrid from '../ProductGrid';

const Products = () => {
    const { isLoading, products } = useProductContext()
    const [view, setView] = React.useState('grid');
    const [priceRange, setPriceRange] = useState('Price(lowest)');
    const [filterProduct, setFilterProducts] = useState([])
    const [categoryList, setCategoryList] = useState('')
    const [company, setCompany] = React.useState('All');

    const newProduct = [...products]
    const handleChange = (event, nextView) => {
        setView(nextView);
    }
    const allPrice = products.map((data) => {
        return data?.price
    })
    const maxPrice = Math.max(...allPrice)
    const [price,setPrice]=useState(maxPrice);
    const handleSearch = (event) => {
        const value = event.target.value;

        setFilterProducts(newProduct.filter((curElem) => {
            return curElem?.name?.toLowerCase().includes(value)
        }))
    }


    const handleSelect = (event) => {
        const value = event.target.value
        setPriceRange(value)
        const sortingValue = (a, b) => {
            switch (value) {
                case 'a-z':
                    return a.name.localeCompare(b.name)

                case 'z-a':
                    return b.name.localeCompare(a.name)

                case 'lowest':
                    return a.price - b.price


                default: return b.price - a.price
            }
        }
        setFilterProducts(newProduct.sort(sortingValue))
    }

    const handleList = (e) => {
        const list = e.target.outerText;
        if (list == 'All') {
            setFilterProducts(newProduct)
        }
        else {
            setFilterProducts(newProduct.filter((elem) => {
                return elem?.category?.toLowerCase() === list?.toLowerCase()
            }))
            setCategoryList(e.target.outerText)
        }

    }
    const handleCompanyList = (event) => {
        const company = event.target.value;
        setCompany(company)
        if (company == 'All') {
            setFilterProducts(newProduct)
        }

        else {
            setFilterProducts(newProduct.filter((elem) => {
                return elem?.company?.toLowerCase() === company?.toLowerCase()
            }))
        }


    }
    const handleColor = (data) => {
        const color = data;
        if (color == 'All') {
            setFilterProducts(newProduct);
        }
        else {
            setFilterProducts(newProduct.filter((data) => {
                return data?.colors?.includes(color)
            }))
        }


    }
    const handlePriceRange = (e) => {
        const price = e.target.value;
        setPrice(price);
        setFilterProducts(newProduct.filter((data)=>{
            return data?.price <= price
        }))
    }
    useEffect(() => {
        setFilterProducts(products)

    }, [])

    if (isLoading) {
        return <Box> <LinearProgress color="error" /></Box>
    }
    return (
        <Box sx={{ width: { xs: '96%', sm: '60%', md: '62%' }, m: 'auto' }}>
            <Stack direction="row" spacing={15} mt={5} >
                <Box flex={1} >
                    <FilterSection
                        companyList={handleCompanyList}
                        colorList={handleColor}
                        company={company}
                        products={products}
                        searchList={handleList}
                        searchInput={handleSearch}
                        priceRange={handlePriceRange}
                        price={price}
                        maxPrice={maxPrice}
                    >

                    </FilterSection>
                </Box>
                <Box flex={4} >
                    <Box>
                        <Sort priceRange={priceRange} change={handleSelect} products={products} onSelect={handleChange} setView={view}></Sort>
                    </Box>
                    {
                        (filterProduct == 0) ? <Box >
                            <Typography mt={15} textAlign={'center'}>
                                No data available
                            </Typography>

                        </Box> : <Box >
                            {
                                isLoading && <LinearProgress color="error" />
                            }
                            {
                                (view === 'grid') ? <ProductGrid products={filterProduct}></ProductGrid> : <ProductList products={filterProduct}></ProductList>
                            }
                            {/* <Product products={products}></Product> */}

                        </Box>
                    }

                </Box>

            </Stack>

        </Box>
    );
};

export default Products;