import { Box } from '@mui/material';

const FormatPrice = ({ price }) => {

    return new Intl.NumberFormat('bng', {
        style: 'currency',
        currency: 'BDT',
        maximumFractionDigits:2
    }).format(price / 100)
};

export default FormatPrice;