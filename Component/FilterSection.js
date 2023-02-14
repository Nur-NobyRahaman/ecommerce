import { Icon } from '@iconify/react';
import { Drafts, Inbox, VolumeDown, VolumeUp } from '@mui/icons-material';
import { Box, Divider, FormControl, Grid, IconButton, InputLabel, List, ListItemButton, ListItemIcon, ListItemText, MenuItem, Select, Slider, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import AppButton from './AppButton';
import FormatPrice from './Helpers/FormatPrice';

const FilterSection = ({
    products, searchInput, searchList, companyList, company, colorList, priceRange, maxPrice, price
}) => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [colors, setColors] = useState('')
    const [all, setAll] = useState('')

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);

    };
    const getUniqueData = (data, property) => {
        let newValue = data.map((curElm) => {
            return curElm[property];
        })
        if (property == 'colors') {
            return newValue = ['All', ...new Set([].concat(...newValue))]
        }
        else {
            return newValue = ['All', ...new Set(newValue)]
        }


    }
    const handleColor = (data) => {
        setColors(data);
        setAll('')
    }
    const handleAll = (data) => {
        setColors('');
        setAll(data)
    }
    const handleSlider = (e) => {
        setPrice(e.target.value)
    }

    const categoryData = getUniqueData(products, 'category')
    const companyData = getUniqueData(products, 'company')
    const colorData = getUniqueData(products, 'colors')


    console.log("maxPrice", maxPrice)
    return (
        <Box bgcolor='background.paper'>
            <TextField
                label='Search'
                variant='outlined'
                size='small'
                onChange={searchInput}
            />
            <Typography fontWeight={600} mt={3} color='text.secondary'> Category</Typography>

            <Box>
                {/* <List component="nav" aria-label="main mailbox folders"
                onClick={searchList}>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <Icon icon="ic:outline-all-inclusive" width={20} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: 'gray' }} primary="All" />
                </ListItemButton>

                <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemIcon>
                        <Icon icon="heroicons:device-phone-mobile" width={20} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: 'gray' }} primary="Mobile" />
                </ListItemButton>

                <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemIcon>
                        <Icon icon="iconoir:laptop" width="20" />
                    </ListItemIcon>
                    <ListItemText sx={{ color: 'gray' }} primary="Laptop" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                >
                    <ListItemIcon>
                        <Icon icon="fa-solid:laptop-house" width={20} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: 'gray' }} primary="Accessories" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                >
                    <ListItemIcon>
                        <Icon icon="teenyicons:computer-outline" width={20} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: 'gray' }} primary="Computer" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 6}
                    onClick={(event) => handleListItemClick(event, 6)}

                >
                    <ListItemIcon >
                        <Icon icon="ph:watch-thin" width={20} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: 'gray' }} primary="Watch" />
                </ListItemButton>
            </List> */}
            </Box>


            {
                categoryData?.map((data, index) =>
                    <List key={index} component="nav" aria-label="main mailbox folders"
                        onClick={searchList}
                        disablePadding>
                        <ListItemButton
                            selected={selectedIndex === (index) + 1}
                            onClick={(event) => handleListItemClick(event, (index) + 1)}
                        >

                            <ListItemText sx={{ color: 'gray' }} primary={data} />
                        </ListItemButton>
                    </List>
                )
            }



            <Typography fontWeight={600} mt={3} mb={2} color='text.secondary'> Company</Typography>
            <FormControl fullWidth >
                <Select
                    size='small'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={company}
                    onChange={companyList}
                    defaultValue={company}
                >
                    {
                        companyData?.map((data, index) => <MenuItem key={index} value={`${data}`}>{data}</MenuItem>)
                    }
                </Select>
            </FormControl>
            <Box mt={3} >
                <Typography fontWeight={600} color='text.secondary' mr={1}> Colors :
                </Typography>
                <Box display={'flex'} gap={'4px'} mt={.5}>
                    {
                        colorData?.map((data, index) =>
                            <Grid key={index} onClick={() => colorList(data)} >
                                {
                                    (data == "All") ? <Typography onClick={() => handleAll(data)} sx={{ cursor: 'default' }} fontSize={13} fontWeight={600}>
                                        {
                                            (all == data) ? <Box sx={{ color: 'goldenrod' }} >All</Box> : <span style={{ color: 'gray' }}>All</span>
                                        }
                                    </Typography> : <Icon key={index}
                                        icon={(colors == data) ? "material-symbols:check-circle-rounded" : "material-symbols:circle"}
                                        color={data}
                                        name={data}
                                        values={data}
                                        id={data}
                                        className={data}
                                        onClick={() => handleColor(data)}
                                    />
                                }
                            </Grid>

                        )
                    }
                </Box>

                {/* {
                    colorData?.map((data, index) =>
                        <button key={data} onClick={colorList} name={data} id={data} style={{ background: 'none', border: 'none', margin: '0px' }}> {
                            (data == "All") ? <Typography color={'text.secondary'} fontSize={13}>All</Typography> : <Icon icon="material-symbols:circle" color={data} width={14}></Icon>
                        }
                        </button>

                    )
                } */}
            </Box>

            <Typography fontWeight={600} mt={3} color='text.secondary'> price</Typography>
            <Typography fontWeight={200} mt={2} color='text.secondary'>{<FormatPrice price={price}></FormatPrice>}</Typography>
            <Slider max={maxPrice} defaultValue={price} value={price} onChange={priceRange} aria-label="Volume" />



            <AppButton
                sx={{ mt: 4 ,mb:4}}
                title='Clear Filters'
                variant='contained'
                startIcon={'icon-park-outline:clear-format'}>

            </AppButton>

        </Box>
    );
};

export default FilterSection;