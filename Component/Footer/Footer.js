import { Icon } from '@iconify/react';
import { Box, Button, Card, CardActions, CardContent, createTheme, FormControl, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import theme from '../../src/theme';
import AppButton from '../AppButton';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Footer = () => {

    return (
        <ThemeProvider theme={theme} >
            <Box className='footer'>
                <Card className='container navigateContact' sx={{ minWidth: 275, backgroundColor: '#f5f5f5', pl: 5, pr: 5, mb: 5, transform: 'translateY(-38px)' }} >
                    <CardContent >
                        <Typography fontSize={14} variant="body2" component="div">
                            Ready to get started?
                        </Typography>
                        <Typography fontSize={14} variant="body2" component="div">
                            Talk to us today?
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <AppButton
                            title='get started'
                            variant='contained'>

                        </AppButton>
                    </CardActions>

                </Card>
                <ThemeProvider theme={darkTheme} >

                    <Box className='container'>
                        <Grid container spacing={10} sx={{ color: 'white' }}>
                            <Grid item xl={3} lg={3}>
                                <Typography sx={{}} fontSize={14} variant="body2" component="div">
                                    E-commerce
                                </Typography>
                                <Typography sx={{ mt: 3 }} fontSize={14} variant="body2" component="div">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, cum.
                                </Typography>
                            </Grid>

                            <Grid item xl={3} lg={3}>
                                <Typography sx={{}} fontSize={14} variant="body2" component="div">
                                    Get more information
                                </Typography>
                                <TextField
                                    label='Email'
                                    size='small'
                                    type={'email'}
                                    name='email'
                                    margin='normal'
                                    color='secondary'
                                    variant='outlined'

                                />
                                <AppButton
                                    title='Information'
                                    variant='contained'
                                    size='small'
                                    sx={{ pl: 3, pr: 3 }}
                                />


                            </Grid>
                            <Grid item xl={3} lg={3}>
                                <Typography sx={{ mb: 2 }} fontSize={14} variant="body2" component="div">
                                    Follow us
                                </Typography>
                                <Box sx={{ display: "flex", gap: '15px', alignItems: "center" }}>
                                    <Icon icon="fa6-brands:youtube" width={30} />
                                    <Icon icon="ant-design:instagram-outlined" width={30} />
                                    <Icon icon="line-md:discord" width={30} />
                                </Box>
                            </Grid>
                            <Grid item xl={3} lg={3}>
                                <Typography sx={{ mb: 2 }} fontSize={14} variant="body2" component="div">
                                    Call us
                                </Typography>
                                <Typography sx={{ mb: 2 }} fontSize={14} variant="body2" component="div">
                                    0145258628
                                </Typography>

                            </Grid>
                        </Grid>

                    </Box>
                    <Box sx={{ mt: 5 }}>
                        <hr />
                        <Box className='container'>
                            <Grid container sx={{ color: 'white' }}>
                                <Grid item xl={8}>
                                    <Typography sx={{ mt: 2 }} fontSize={12} variant="body2" component="div">
                                        @{new Date().getFullYear()} E-commerce Website All right
                                    </Typography>

                                </Grid>
                                <Grid item xl={4}>
                                    <Typography sx={{ mt: 2 }} fontSize={12} variant="body2" component="div">
                                        PRIVACY POLICY
                                    </Typography>
                                    <Typography sx={{ mt: 0.5 }} fontSize={12} variant="body2" component="div">
                                        Trams & Condition
                                    </Typography>

                                </Grid>
                            </Grid>
                        </Box>
                    </Box>


                </ThemeProvider>
            </Box>
        </ThemeProvider>
    );
};

export default Footer;