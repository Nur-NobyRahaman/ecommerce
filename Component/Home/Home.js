import { Box, Button, Container, Grid, TextField, ThemeProvider, useTheme } from '@mui/material';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Image from 'next/image';
import img from '../../public/mike-petrucci-c9FQyqIECds-unsplash.jpg'
import AppButton from '../AppButton';
import theme from '../../src/theme'
import { makeStyles } from '@mui/styles'
import { green, red } from '@mui/material/colors';

const useStyle = makeStyles({
    field: {
        marginTop: 40,
        padding: 0,


    }
})
const Home = (myData) => {

    const classes = useStyle()

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: { xs: '96%', sm: '60%', md: '62%' }, m:'auto'}}>

                <Grid sx={{mt:5,mb:7}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={8} md={6} lg={6}>
                        <small>Welcome To</small>
                        <h1 className='heading'> {myData.data ? myData.data : myData.myData}</h1>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam nemo porro quae sit doloremque perspiciatis vel incidunt, repellendus ipsam ab saepe fugiat quasi expedita aliquid asperiores! Deserunt, eos esse!</small><br />

                        <AppButton
                            title='Shop now'
                            variant='contained'
                            color='info'
                            sx={{ mt: 2, pl: 3, pr: 3 }}
                            startIcon='material-symbols:shopping-basket-sharp'
                        ></AppButton>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6} lg={6}>
                        <Box >
                            <Image src={img} alt='image' width={400} height={250}></Image></Box>

                    </Grid>
                </Grid>

            </Box>
        </ThemeProvider>
    );
};

export default Home;