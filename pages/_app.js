import { ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import '../styles/globals.css'
import theme from '../src/theme'
import { AppProvider } from '../Component/Context/ProductContex'
import { FilterContextProvider } from '../Component/Context/FilterContext'
import {CartProvider } from '../Component/Context/CartContext'
export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={2} preventDuplicate>
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </SnackbarProvider >
  </ThemeProvider>


}
