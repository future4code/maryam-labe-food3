import React from 'react'
import IconButton from '@mui/material/IconButton';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

const ArrowButton = () => {
    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="voltar"
            sx={{ mr: 2 }}>
        <ArrowBackIosRoundedIcon />
        </IconButton>
    )
}

export default ArrowButton