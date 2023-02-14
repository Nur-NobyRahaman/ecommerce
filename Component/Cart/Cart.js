import { Box, Card, CardContent, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import { useCartContext } from '../Context/CartContext';
import Paper from '@mui/material/Paper';
import { Icon } from '@iconify/react';
import CartItem from './CartItem';
import AppButton from '../AppButton';
import { useRouter } from 'next/router';
import FormatPrice from '../Helpers/FormatPrice';

const Cart = () => {
    const { cart, clearCart,totalAmount,shippingFee } = useCartContext()
    const router = useRouter()

    return (

        <Box mt={7}>
            {(cart?.length) > 0 ? <Box sx={{ width: { xs: '96%', sm: '60%', md: '62%' }, m: 'auto' }}>
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">ITEM</TableCell>
                                <TableCell align="left">PRICE</TableCell>
                                <TableCell align="left">QUANTITY</TableCell>
                                <TableCell align="left">SUBTOTAL</TableCell>
                                <TableCell align="center">REMOVE</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map((row) => {
                                return <CartItem key={row.id} {...row}></CartItem>
                            }

                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid container mt={2}>
                    <Grid item md={6} lg={6}>
                        <AppButton title='continue shopping' variant='contained' onClick={() => router.push('/products')}></AppButton>
                    </Grid>
                    <Grid item md={6} lg={6} >
                        <AppButton onClick={clearCart} sx={{ float: 'right' }} title='clear cart' variant='contained' color='secondary'></AppButton>
                    </Grid>
                </Grid>

                <Grid container mt={6}>
                    <Grid item md={6} lg={6}></Grid>
                    <Grid item md={6} lg={6} display={'flex'} justifyContent={'right'} >
                        <Card sx={{ minWidth: 230 }}>
                            <CardContent  >
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Box>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Subtotal :
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Shipping Fee :
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography textAlign={'right'} sx={{ fontSize: 14 }} fontWeight={700} gutterBottom>
                                            {<FormatPrice price={totalAmount}></FormatPrice>}
                                        </Typography>
                                        <Typography textAlign={'right'} sx={{ fontSize: 14 }} fontWeight={700} gutterBottom>
                                            {<FormatPrice price={shippingFee}></FormatPrice>}
                                        </Typography>
                                        
                                    </Box>

                                </Box>

                            </CardContent>
                            <Divider variant="middle" />
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Box>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Order Total :
                                        </Typography>
                                        
                                    </Box>
                                    <Box>
                                    <Typography textAlign={'right'} sx={{ fontSize: 14 }} fontWeight={700} gutterBottom>
                                            {<FormatPrice price={totalAmount + shippingFee}></FormatPrice>}
                                        </Typography>
                                        
                                    </Box>

                                </Box>
                            </CardContent>

                        </Card>
                    </Grid>

                </Grid>

            </Box>
                : <Typography textAlign={'center'} fontSize={30}> No Cart in Item</Typography>}



        </Box>
    );
};

export default Cart;