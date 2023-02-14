import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import { MainContainer } from '../../styles/jsonStyle';
import Image from 'next/image';
import logo from '../../public/clark-tibbs-oqStl2L5oxI-unsplash.jpg'
import { Badge, Box, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { useCartContext } from '../Context/CartContext';


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { totalItem } = useCartContext()
    return (
        <div className='navbar'>
            <Box>
                <Icon icon="game-icons:ecology" width="100" height="50" />
                {/* <Image src={logo} alt='logo' width={200} height={40}></Image> */}
            </Box>
            {
                open ? <Icon onClick={(e) => setOpen(!open)} className='closeNavMenu' width="26" height="26" icon="radix-icons:cross-2" /> : <Icon onClick={(e) => setOpen(!open)} className='navMenu' width="26" height="26" icon="ic:sharp-menu" />
            }

            <Box className={`${open ? 'PhoneNavList' : 'PcNavList'}`} sx={{ textTransform: 'uppercase' }}>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
                <Link href={"/products"}>Products</Link>
                <Link href={"/login"}> <>Login</></Link>
                <Link href={"/cart"}>
                    <Badge color="secondary" badgeContent={totalItem} showZero>
                        <Icon icon="ic:round-shopping-cart" width="25" height="25" />
                    </Badge>
                </Link>

            </Box>

        </div>

    );
};

export default Navbar;