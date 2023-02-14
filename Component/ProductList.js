import { Box, Button, CardMedia, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import AppButton from './AppButton';
import FormatPrice from './Helpers/FormatPrice';

const ProductList = ({ products }) => {
    return (
        <Box>
            <Box mt={10}>
                {
                    products?.map((data, index) => (
                        <Link key={index} href={`/${data?.id}`} sx={{ textDecoration: 'none' }}>
                            <Grid key={index} container spacing={6} alignItems={'center'} mb={3}>
                                <Grid item xs={12} sm={12} md={5} lg={5}  >
                                    <CardMedia
                                        component="img"
                                        height="154"
                                        image={data?.image}
                                        alt="Paella dish"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <Typography textTransform={'capitalize'} fontSize={16} color={'text.secondary'}>{data.name}</Typography>
                                    <Typography mt={2} fontSize={12} color={'text.secondary'}> {<FormatPrice price={data.price}></FormatPrice>}</Typography>
                                    <Typography sx={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }} mb={2} fontSize={12} color={'text.secondary'}>{data.description}</Typography>
                                    <Button size='small' variant='outlined' color='primary'>
                                        <Link key={index} href={`/${data?.id}`} sx={{ textDecoration: 'none' }}></Link>
                                        Read more </Button>
                        
                                </Grid>


                            </Grid>
                        </Link>
                    ))
                }
                {/* <Grid item xs={12} sm={12} md={6} lg={6}>
                    {
                        products?.map((data, index) =>
                            <Box key={index} position={'relative'} className='imageFrm' mb={7}>
                                <CardMedia
                                    component="img"
                                    height="154"
                                    image={data?.image}
                                    alt="Paella dish"
                                />

                            </Box>)
                    }
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    {
                        products?.map((data, index) =>
                            <Box key={index} mb={7}>
                                <Typography textTransform={'capitalize'} fontSize={16} color={'text.secondary'}>{data.name}</Typography>
                                <Typography mt={2} fontSize={12} color={'text.secondary'}> {<FormatPrice price={data.price}></FormatPrice>}</Typography>
                                <Typography mb={2} fontSize={12} color={'text.secondary'}>{data.description}</Typography>
                                <AppButton title='Read more'></AppButton>
                            </Box>)
                    }
                </Grid> */}
            </Box>
        </Box>
    );
};

export default ProductList;