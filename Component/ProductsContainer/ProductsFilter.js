import { Icon } from '@iconify/react';
import { Circle } from '@mui/icons-material';
import { Box, Button, FormControl, Grid, IconButton, List, ListItemButton, ListItemText, MenuItem, Select, Slider, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import AppButton from '../AppButton';
import { useFilterContext } from '../Context/FilterContext';
import FormatPrice from '../Helpers/FormatPrice';

const ProductsFilter = () => {
    const { filters: { text, category, company, color, maxPrice, price }, updateFilterValue, allProducts ,clearFilters} = useFilterContext()

    const [selectCategory, setSelectCategory] = useState('All')
    const [colors, setColors] = useState('')
    const [all, setAll] = useState('')


    const getUniqueData = (data, property) => {
        let newValue = data.map((elem) => {
            return elem[property]
        })
        if (property == 'colors') {
            return newValue = ["all", ... new Set([].concat(...newValue))]
        }
        return newValue = ["all", ... new Set(newValue)]
    }
    const handle = (e) => {
        console.log(e)
    }
    const handleColor = (data) => {
        setColors(data);
        setAll('')
    }
    const handleAll = (data) => {
        setColors('');
        setAll(data)
    }

    const categoryData = getUniqueData(allProducts, "category")
    const companyData = getUniqueData(allProducts, "company")
    const colorData = getUniqueData(allProducts, "colors")
    return (
        <Box bgcolor='background.paper'>
            <TextField
                label='Search'
                variant='outlined'
                size='small'
                name='text'
                value={text}
                onChange={updateFilterValue}
            />
            <Typography fontWeight={600} mt={3} mb={1} color='text.secondary'> Category</Typography>

            {
                categoryData?.map((data, index) =>
                    <Box key={index} >
                        <button style={{ textTransform: 'capitalize' }} className={(category == data) ? 'button active' : 'button '}
                            value={data}
                            type={'button'}
                            name='category'
                            variant={(category == data) && 'contained'}
                            size='small'
                            onClick={updateFilterValue}

                        > {data}</button>
                    </Box>

                )
            }
            <Typography fontWeight={600} mt={3} mb={2} color='text.secondary'> Company</Typography>
            <FormControl fullWidth >
                <Select
                    sx={{ textTransform: 'capitalize' }}
                    size='small'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name='company'
                    value={company}
                    onChange={updateFilterValue}
                    defaultValue={company}
                >
                    {
                        companyData?.map((data, index) => <MenuItem sx={{ textTransform: 'capitalize' }} key={index} name='company' value={data}>{data}</MenuItem>)
                    }
                </Select>
            </FormControl>
            <Box mt={3} >
                <Typography fontWeight={600} color='text.secondary' mr={1}> Colors :
                </Typography>

                <Box display={'flex'} gap={1} alignItems={'center'} mt={.7}>
                    {
                        colorData?.map((data, index) =>
                            <Box key={index} display={'flex'}>
                                {
                                    (data === 'all') ? <button defaultValue={color} type='button' key={data} name='color' style={{ background: 'none', marginRight: '5px' }} className='colorButton' value={data} id={data} onClick={updateFilterValue}> All
                                    </button> :
                                        <button defaultValue={color} key={data} type='button' name='color' className='colorButton' style={{ backgroundColor: data, }} value={data} id={data} onClick={updateFilterValue}> {(color === data) ? <Icon icon="icon-park-solid:correct" color='white' width={7} /> : null}
                                        </button>
                                }

                            </Box>


                        )
                    }
                </Box>

            </Box>
            <Typography fontWeight={600} mt={3} color='text.secondary'> price</Typography>
            <Typography fontWeight={200} mt={2} color='text.secondary'>{<FormatPrice price={price}></FormatPrice>}</Typography>
            <Slider max={maxPrice} defaultValue={price} name='price' value={price} onChange={updateFilterValue} aria-label="Volume" />
            <AppButton
                sx={{ mt: 4, mb: 4 }}
                title='Clear Filters'
                variant='contained'
                startIcon={'icon-park-outline:clear-format'}
                onClick={clearFilters}>

            </AppButton>

        </Box>
    );
};

export default ProductsFilter;