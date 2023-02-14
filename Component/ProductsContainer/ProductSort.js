import { Icon } from '@iconify/react';
import { ViewList, ViewModule } from '@mui/icons-material';
import { Box, Button, Fab, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React from 'react';
import AppButton from '../AppButton';
import { useFilterContext } from '../Context/FilterContext';

const ProductSort = () => {
    const { gridView, setGridView, setListView,filterProducts,sortingValue,sorting } = useFilterContext()

   
    return (
        <Box mb={8}>
            <Stack direction="row" spacing={2} justifyContent={'space-between'} >
                <Box display={'flex'} gap={1.5}>

                    <Fab size='small' color={(gridView === true)? "primary" :"secondary"} 
                    onClick={setGridView}>
                        <Icon icon="ic:round-grid-view" width={18} />
                    </Fab>
                    <Fab size='small' color={(gridView === true)? "secondary" :"primary"} 
                     onClick={setListView}>
                        <Icon icon="material-symbols:format-list-bulleted-rounded" width={18} />
                    </Fab>

                </Box>


                <Box>
                    <Typography color={'text.secondary'}>
                        {filterProducts?.length} total products
                    </Typography>
                </Box>
                <Box>
                    {/* <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                        <Select
                            placeholder={'priceRange'}
                            size='small'
                            labelId="demo-simple-select-label"
                            id='sort'
                            value={sortingValue}
                            onClick={sorting}
                            defaultValue={sortingValue}
                            label="Sort By"
                        >
                            <MenuItem defaultChecked selected value="lowest">Price(lowest)</MenuItem>
                            <MenuItem value="highest">Price(highest)</MenuItem>
                            <MenuItem value='a-z'>Name(a-z)</MenuItem>
                            <MenuItem value='z-a'>Name(z-a)</MenuItem>
                        </Select>
                    </FormControl> */}
                    <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                        <Select
                            placeholder={'priceRange'}
                            size='small'
                            labelId="demo-simple-select-label"
                            id='sort'
                            value={sortingValue}
                            onChange={sorting}
                            defaultValue={sortingValue}
                            label="Sort By"
                        >
                            <MenuItem defaultChecked selected value="lowest">Price(lowest)</MenuItem>
                            <MenuItem value="highest">Price(highest)</MenuItem>
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

export default ProductSort;