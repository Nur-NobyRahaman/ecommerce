import { Icon } from '@iconify/react';
import { Box, Button, Card, CardActions, CardContent, Grid, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import theme from '../../src/theme';
import DBBL from '../../public/DBBL.png'
import bkash from '../../public/bkash.png'
import city from '../../public/city.png'
import brac from '../../public/brack.png'
import sonali from '../../public/sonali.avif'
import Image from 'next/image';

const Trusted = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ backgroundColor: '#f5f5f5', mb: 10 }}>
                <Box className='container'>
                    <Typography sx={{ textAlign: 'center', pt: 6 }} fontSize={12} variant="body2" component="div">
                        Trusted By 1000+ Companies
                    </Typography>
                    <Box className='trusted'>
                        <Image src={sonali} alt={'DBBL'} width={70} height={70}></Image>
                        <Image src={DBBL} alt={'DBBL'} width={110} height={110}></Image>
                        <Image src={bkash} alt={'DBBL'} width={70} height={70}></Image>
                        <Image src={city} alt={'DBBL'} width={105} height={105}></Image>
                        <Image src={brac} alt={'DBBL'} width={50} height={50}></Image>

                    </Box>
                    
                </Box>
            </Box>


        </ThemeProvider>
    );
};

export default Trusted;