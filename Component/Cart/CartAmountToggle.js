import { Icon } from '@iconify/react';
import { IconButton, Stack, Typography } from '@mui/material';
import React from 'react';

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
    return (
        <Stack mt={1} alignItems={'center'} direction="row" spacing={2}>
            <IconButton onClick={setDecrease}>
                <Icon icon="carbon:subtract" color='black' width={23} />
            </IconButton>
            <Typography fontSize={20}>{amount}</Typography>
            <IconButton onClick={setIncrease}>
                <Icon icon="material-symbols:add" color='black' width={23} />
            </IconButton>
        </Stack>
    );
};

export default CartAmountToggle;