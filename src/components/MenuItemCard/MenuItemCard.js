import React from 'react';
import { Typography } from '@mui/material';
import { CardContainer, ImgWrapper } from './MenuItemCardStyles';

const MenuItemCard = () => {

  return (
    <CardContainer sx={{ maxWidth: 345, boxShadow: 1 }}>
      <ImgWrapper src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_960_720.jpg" />
      <div>
        <Typography variant="subtitle2" gutterBottom component="div" color="primary">
          <strong>Bullger</strong>
        </Typography>
        <Typography variant="body2" gutterBottom component="div" color="secondary">
          Pão, carne, queijo
        </Typography>
        <Typography variant="subtitle2" gutterBottom component="div">
          <strong>R$20,00</strong>
        </Typography>
      </div>
      {/* <ImgWrapper src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_960_720.jpg" />
      <div>
        <Typography variant="subtitle2" gutterBottom component="div" color="primary">
          <strong>Bullger</strong>
        </Typography>
        <Typography variant="body2" gutterBottom component="div" color="secondary">
          Pão, carne, queijo
        </Typography>
        <Typography variant="subtitle2" gutterBottom component="div">
          <strong>R$20,00</strong>
        </Typography>
      </div> */}
    </CardContainer>
  );
}

export default MenuItemCard;
