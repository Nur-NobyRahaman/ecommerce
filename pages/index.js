import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Home from '../Component/Home/Home';
import { MainContainer } from '../styles/jsonStyle';
import Link from 'next/link';
import Navbar from '../Component/Navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import AppButton from '../Component/AppButton';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { Button } from '@mui/material';
import Services from '../Component/Services/Services';
import Trusted from '../Component/Trusted/Trusted';
import Footer from '../Component/Footer/Footer';
import FeatureProduct from '../Component/FeatureProduct';

const inter = Inter({ subsets: ['latin'] })

export default function Index() {

  
  return (
    <>
      <Head>
        <title>Ecommerce Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;600;500;700;800&display=swap" rel="stylesheet"></link>
        {/* <link href="https://fonts.googleapis.com/css2?family=Mirza:wght@400;600&family=Work+Sans:wght@400;600;700;800&display=swap" rel="stylesheet"></link> */}
      </Head>

      <div>

        <Navbar></Navbar>
        <Home myData={'Ecommerce Website'}></Home>
        <FeatureProduct></FeatureProduct>
        <Services></Services>
        <Trusted></Trusted>
        <Footer></Footer>
      </div>
    </>
  )
}
