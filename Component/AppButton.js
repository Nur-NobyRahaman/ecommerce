import { Icon } from '@iconify/react';
import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react';

const AppButton = ({
    title = "Submit",
    variant = "outlined",
    color = "primary",
    startIcon = null,
    endIcon = null,
    onClick,
    sx = {},
    loadingButton = false,
    loading = false,
    disabled = false,
    link = false,
    size = '',

}
) => {
    const {enqueueSnackbar}  = useSnackbar();
    const defaultOnClick = () => {
        enqueueSnackbar(`${title} is under development`, {
            variant: "warning",
        });
    };


    return (
        <div>
            <Button
                variant={variant}
                startIcon={startIcon ? <Icon icon={startIcon} width={20} /> : null}
                endIcon={endIcon ? <Icon icon={endIcon} width={20}/> : null}
                color={color}
                sx={sx}
                size={size}
                onClick={()=> onClick ? onClick() : defaultOnClick()}
            >{title}</Button>
        </div>
    );
};

export default AppButton;