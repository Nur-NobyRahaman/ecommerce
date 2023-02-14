import { Box, CardMedia, Grid, LinearProgress, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useProductContext } from './Context/ProductContex';
import FormatPrice from './Helpers/FormatPrice';

const Text = ({ data }) => {
    return (
        <Grid key={data?.id} item xs={12} sm={6} md={4} lg={4} >
            <Link href={`/${data?.id}`} sx={{ textDecoration: 'none' }}>
                <Box bgcolor={'#fafafa'} pt={2} pr={2} pl={2} borderRadius={2} >
                    <Box position={'relative'} className='imageFrm'>
                        <CardMedia
                            component="img"
                            height="154"
                            image={data?.image}
                            alt="Paella dish"
                        />
                        <Typography borderRadius={5}
                            position={'absolute'}
                            right={10}
                            top={10}
                            bgcolor={'#fafafa'}
                            width={'fit-content'}
                            pl={3}
                            pr={3}
                            pt={.5}
                            pb={.5}
                            fontSize={11}
                            sx={{ color: 'gray' }}
                        >{data?.category}
                        </Typography>
                    </Box>

                    <Stack
                        direction="row" spacing={2}
                        justifyContent={'space-between'}
                        mt={.7}
                    >
                        <Typography fontSize={11} sx={{ color: 'gray' }}>{data?.name}</Typography>
                        <Typography fontSize={11} sx={{ color: 'gray' }}>  {<FormatPrice price={data?.price}></FormatPrice>}</Typography>
                    </Stack>
                </Box>


            </Link>




        </Grid>
    );
};

export default Text;