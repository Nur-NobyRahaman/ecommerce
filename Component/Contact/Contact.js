import { Icon } from '@iconify/react';
import { Box, Button, Card, CardActions, CardContent, FormControl, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import theme from '../../src/theme';
import AppButton from '../AppButton';

const Contact = () => {
    return (
        <ThemeProvider theme={theme}>
            <Typography sx={{ textAlign: 'center', mt: 10, mb: 2 }} fontSize={24} variant="body2" component="div">
                Contact Page
            </Typography>


            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10288.816026581839!2d89.91425531600575!3d24.254164397438508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdfbe3d271b363%3A0x8a0d420f347f7c7c!2sTangail!5e0!3m2!1sen!2sbd!4v1674477134731!5m2!1sen!2sbd"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">

            </iframe>
            <Box sx={{ margin: 'auto', mb: 5, mt: 3 }}>
                <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item lg={4} xl={4} sm={6} xm={6} >
                        <form action="https://formspree.io/f/xlekdkle" method='POST'>
                            <TextField
                                fullWidth
                                variant='outlined'
                                label='User Name'
                                size='small'
                                margin='normal'
                                name='userName'
                                required
                            ></TextField>
                            <br />
                            <TextField
                                fullWidth
                                variant='outlined'
                                label='Email'
                                size='small'
                                margin='normal'
                                type={'email'}
                                name='email'
                                required
                            ></TextField>
                            <br />
                            <TextField
                                fullWidth
                                variant='outlined'
                                label='Message'
                                size='small'
                                margin='normal'
                                type={'email'}
                                multiline
                                rows={4}
                                name='massage'
                                required
                            ></TextField>
                            {/* 
                            <AppButton
                                title='send'
                                variant='contained'
                                size='large'
                                color='info'
                                sx={{ pl: 5, pr: 5, mt: 1.5 }}
                            >
                            </AppButton> */}
                            <TextField variant='outlined'  margin='normal' size='small' color='info' value={'SEND'} type={'submit'}></TextField>
                        </form>

                    </Grid>
                </Grid>

            </Box>


        </ThemeProvider>
    );
};

export default Contact;