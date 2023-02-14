import { Icon } from '@iconify/react';
import { Box, Button, Card, CardActions, CardContent, Grid, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import theme from '../../src/theme';

const Services = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: { xs: '96%', sm: '60%', md: '62%' },margin:{sm:'auto',md:'auto'},ml:{xs:5}}}>
                <Grid container spacing={8} sx={{ mb: 5 }}>
                    <Grid item xl={3.5} lg={3.5} xm={12} sm={12} >
                        <Card sx={{ minWidth: 275, backgroundColor: '#f5f5f5' }} className='card'>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '15px', height: '180px' }}>
                                <Icon icon="mdi:truck-delivery-outline" color='#651fff' width="30" height="30" />
                                <Typography fontSize={14} variant="body2" component="div">
                                    Super Fast and Free Delivery
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>

                    <Grid item xl={3.5} lg={3.5} xm={12} sm={12} sx={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>

                        <Card sx={{ minWidth: 275, backgroundColor: '#f5f5f5' }} className='card'>
                            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', height: '80px' }}>
                                <Icon icon="mdi:sun-protection" color='#651fff' width="30" height="30" />
                                <Typography fontSize={14} variant="body2" component="div">
                                    Non-Contact Shipping
                                </Typography>
                            </CardContent>

                        </Card>

                        <Card sx={{ minWidth: 275, backgroundColor: '#f5f5f5' }} className='card'>
                            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', height: '80px' }}>
                                <Icon icon="game-icons:receive-money" color='#651fff' width="30" height="30" />
                                <Typography fontSize={14} variant="body2" component="div">
                                    Money-Back Guaranteed
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>

                    <Grid item xl={3.5} lg={3.5} xm={12} sm={12}>
                        <Card sx={{ minWidth: 275, backgroundColor: '#f5f5f5' }} className='card'>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '15px', height: '180px' }}>
                                <Icon icon="gala:secure" color='#651fff' width="30" height="30" />
                                <Typography fontSize={14} variant="body2" component="div">
                                    Super Secure Payment System
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>



                </Grid>
            </Box>
        </ThemeProvider>
    );
};

export default Services;