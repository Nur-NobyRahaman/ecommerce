import { Bookmark, BookmarkBorder, Favorite, FavoriteBorder, ViewList, ViewModule, ViewQuilt } from '@mui/icons-material';
import { Box, Checkbox, FormControl, Grid, InputLabel, MenuItem, Select, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import AppButton from './AppButton';

const Sort = ({ priceRange, change, products, onSelect, setView ,}) => {
    const [priceRang, setPriceRange] = useState('Price(lowest)');
    const value = priceRange
    console.log("priceRange", priceRange)
    return (
        <Box>
            <Stack direction="row" spacing={2} justifyContent={'space-between'} >
                <Box>
                    <ToggleButtonGroup
                        color='primary'
                        size='small'
                        sx={{ mr: 2, outline: 'none', border: 'none' }}
                        value={setView}
                        exclusive
                        onChange={onSelect}
                    >

                        <ToggleButton sx={{ mr: 2, outline: 'none', border: 'none' }} value="grid" aria-label="grid">
                            <ViewModule />
                        </ToggleButton>
                        <ToggleButton sx={{ mr: 2, outline: 'none', border: 'none' }} color='primary' value="list" aria-label="list">
                            <ViewList />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
                <Box>
                    <Typography color={'text.secondary'}>
                        {products.length} total products
                    </Typography>
                </Box>
                <Box>
                    <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                        <Select
                            placeholder={'priceRange'}
                            size='small'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"                            
                            value={priceRange}
                            onChange={change}
                            defaultValue={priceRange}
                            label="Sort By"
                        >
                            <MenuItem defaultChecked selected value="lowest">Price(lowest)</MenuItem>
                            <MenuItem value="height">Price(height)</MenuItem>
                            <MenuItem value='a-z'>Name(a-z)</MenuItem>
                            <MenuItem value='z-a'>Name(z-a)</MenuItem>
                        </Select>
                    </FormControl>

                    {/* <select name="Price(lowest)" id="" style={{padding:'10px',borderRadius:'5px', color:"gray"}}>
                        <option value="Price(lowest)">Price(lowest)</option>
                        <option value="Price(lowest)">Price(lowest)</option>
                        <option value="Price(lowest)">Price(lowest)</option>
                    </select> */}

                </Box>
            </Stack>

        </Box>
    );
};

export default Sort;