import { Icon } from '@iconify/react';
import { Box, CardMedia, Grid, IconButton, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';
import { useCartContext } from '../Context/CartContext';
import FormatPrice from '../Helpers/FormatPrice';
import CartAmountToggle from './CartAmountToggle';

const CartItem = ({ id, name, price, amount, shippingPrice, image, color }) => {
    const { removeItem ,setIncrease,setDecrease} = useCartContext()

    // const setIncrease = () => {
    //     if (amount >= 0 && amount < (singleProduct?.stock)) {
    //         setAmount(amount + 1)
    //     }
    // }
    // const setDecrease = () => {
    //     if (amount > 0) {
    //         setAmount(amount - 1)
    //     }
    // }

    return (
        <TableRow

            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="left" > {<Box display={'flex'} alignItems={'center'} gap={1}>
                <Box width={'50px'}>
                    <CardMedia
                        component="img"
                        // height="50"
                        image={image}
                        alt="Paella dish"

                    />
                </Box>

                <Box >
                    <Typography textAlign={'left'} fontSize={11}>{name}</Typography>
                    <Box display={'flex'} alignItems={'center'} gap={.5}>
                        <Typography textAlign={'left'} fontSize={11}>Color: </Typography>
                        <button defaultValue={color} type='button' name='color' className='colorButton' style={{ background: (color ? color : 'none'), }} >
                        </button>
                    </Box>

                </Box>
            </Box>}

            </TableCell>
            <TableCell align="left">{<FormatPrice price={price}></FormatPrice>}</TableCell>
            <TableCell align="left">{<CartAmountToggle
                amount={amount} setDecrease={()=>setDecrease(id) } setIncrease={()=> setIncrease(id) }></CartAmountToggle>}</TableCell>
            <TableCell align="left">{<FormatPrice price={price * amount}></FormatPrice>}</TableCell>
            <TableCell align="center"> <IconButton onClick={() => removeItem(id)}><Icon icon="ic:baseline-delete" color="red" /></IconButton> </TableCell>
        </TableRow>
    );
};

export default CartItem;