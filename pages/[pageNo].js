import { Icon } from '@iconify/react';
import { Backdrop, CardContent, CardMedia, CircularProgress, Divider, Grid, IconButton, LinearProgress, Rating, Skeleton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AppButton from '../Component/AppButton';
import CartAmountToggle from '../Component/Cart/CartAmountToggle';
import { useCartContext } from '../Component/Context/CartContext';
import { useProductContext } from '../Component/Context/ProductContex';
import FormatPrice from '../Component/Helpers/FormatPrice';
import MyImage from '../Component/MyImage';
import Navbar from '../Component/Navbar/Navbar';

const API = 'https://api.pujakaitem.com/api/products'
const PageNo = () => {
    const router = useRouter()
    const id = router.query.pageNo;
    const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext()
   
    const { addToCart } = useCartContext();
    const { price } = singleProduct
    const [selectImage, setSelectImage] = useState('')
    const [color, setColor] = useState('')
    const [fistImage, setFirstImage] = useState('')
    const [amount, setAmount] = useState(1)
    const singleImage = (singleProduct?.image?.slice(0, 1))


    const handleImage = () => {
        const value = singleImage?.map((data) => data?.url)

        setFirstImage(value?.toString())
    }
    const setIncrease = () => {
        if (amount >= 0 && amount < (singleProduct?.stock)) {
            setAmount(amount + 1)
        }
    }
    const setDecrease = () => {
        if (amount > 0) {
            setAmount(amount - 1)
        }
    }

    useEffect(() => { handleImage() }, [singleImage])
    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`)

    }, [])

    if (isSingleLoading) {
        return <Box>
            <LinearProgress color="error" />

        </Box>
    }
    return (
        <Box>
            <Box>
                <Navbar></Navbar>
                <Typography fontSize={18} bgcolor={'#eeeeee'} p={2}> <Link href={'/'} style={{ color: 'green', fontWeight: 500 }}>Home</Link> / {singleProduct?.name}</Typography>
            </Box>
            <Box sx={{ width: { xs: '96%', sm: '60%', md: '62%' }, m: 'auto' }}>
                <Grid container spacing={4} mt={2}>

                    <Grid item xs={5} sm={3} md={4} lg={4} display={'flex'} gap={1.5} alignItems={'center'}>
                        <Grid item xs={5} sm={3} md={3} lg={3} >
                            {
                                singleProduct?.image?.map((data, index) =>
                                    <Box key={index} mb={1}>
                                        <CardMedia

                                            component="img"
                                            height="75"
                                            image={data?.url}
                                            alt="Paella dish"
                                            onClick={() => setSelectImage(data?.url)}
                                        />

                                    </Box>)

                            }
                        </Grid>

                        <Grid item xs={5} sm={3} md={9} lg={9} >
                            {
                                selectImage ?
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={selectImage}
                                        alt="Paella dish"
                                    /> :
                                    singleImage?.map((data, index) => <CardMedia key={index}
                                        component="img"
                                        height="200"
                                        image={data?.url}
                                        alt="Paella dish"

                                    />
                                    )
                            }
                        </Grid>
                    </Grid>


                    <Grid item xs={12} sm={6} md={6} lg={6} >
                        <Typography mb={1} fontSize={20}>{singleProduct?.name}</Typography>
                        <Box display={'flex'} alignItems={'center'} gap={1}>
                            <Rating name="half-rating" value={parseFloat(singleProduct?.stars)} defaultValue={parseFloat(singleProduct?.stars)} precision={0.02} readOnly />
                            <Typography fontSize={12} color='text.secondary'>({singleProduct?.reviews} customers reviewed) </Typography>
                        </Box>


                        <Typography mt={1} fontSize={13}>MRP : <del> {<FormatPrice price={price + 25000}></FormatPrice>} </del> </Typography>
                        <Typography sx={{ color: 'blue' }} mt={1} fontSize={13} fontWeight={600}> Deal of the Day: {<FormatPrice price={singleProduct?.price}></FormatPrice>}</Typography>
                        <Typography mt={1} fontSize={13} color='text.secondary'>{singleProduct?.description}</Typography>

                        <Stack direction="row" spacing={4} borderBottom={'2px solid gray'} mt={3}>
                            <Box >
                                <Typography align='center'><Icon icon="carbon:delivery" /></Typography>
                                <Typography fontSize={12} color='text.secondary'>Free Delivery</Typography>
                            </Box>
                            <Box>
                                <Typography align='center'><Icon icon="tabler:replace-off" /></Typography>
                                <Typography fontSize={12} color='text.secondary'> 30 Days ReplaceMent</Typography></Box>
                            <Box>
                                <Typography align='center'><Icon icon="carbon:delivery" /></Typography>
                                <Typography fontSize={12} color='text.secondary'> Delivery</Typography></Box>
                            <Box>
                                <Typography align='center'><Icon icon="ic:baseline-security" /></Typography>
                                <Typography fontSize={12} color='text.secondary'> 2 Years Warranty</Typography></Box>
                        </Stack>
                        <Box mt={2} pb={1.5} borderBottom={'2px solid gray'}>
                            <Typography fontSize={12} color='text.secondary'> Available : <b>{(singleProduct?.stock) ? 'In stock' : 'Not available'
                            }</b> </Typography>
                            <Typography fontSize={12} color='text.secondary'> Id : <b>{singleProduct?.id
                            }</b>  </Typography>
                            <Typography fontSize={12} color='text.secondary'> Band : <b>{singleProduct?.company
                            }</b> </Typography>
                        </Box>
                        <Typography mt={1} display={'flex'} alignItems={'center'} fontSize={13} color='text.secondary'> Color : {singleProduct?.colors?.map((data, index) => (
                            <IconButton size='small' key={index} >
                                <Icon
                                    icon={(color === data) ? "material-symbols:check-circle-rounded" : "material-symbols:circle"}
                                    color={data} onClick={() => setColor(data)} />
                            </IconButton>
                        ))} </Typography>

                        <CartAmountToggle
                            amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}></CartAmountToggle>
                        <Link href={'/cart'}>
                            <AppButton
                                startIcon={"fluent:wallet-credit-card-32-filled"}
                                title='Add to Card'
                                variant='contained'
                                onClick={() => addToCart(
                                    id,
                                    color,
                                    singleProduct,
                                    price,
                                    amount,
                                    fistImage)

                                }
                            ></AppButton>
                        </Link>


                    </Grid>
                </Grid>
            </Box>

        </Box >
    );
};

export default PageNo;