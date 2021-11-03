import React from 'react';
import { Typography } from '@mui/material';
import { CardContainer, ImgWrapper, BtnAdd, BtnRemove, TextContainer } from './MenuItemCardStyles';

const MenuItemCard = ({ product }) => {
  const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <CardContainer sx={{ maxWidth: 345, boxShadow: 1 }}>
      <ImgWrapper src={product.photoUrl} />
      <TextContainer>
        <Typography variant="subtitle2" gutterBottom component="div" color="primary">
          <strong>{product.name}</strong>
        </Typography>
        <Typography variant="body2" gutterBottom component="div" color="secondary">
          {product.description}
        </Typography>
        <Typography variant="subtitle2" gutterBottom component="div">
          <strong>{currency.format(product.price)}</strong>
        </Typography>
        <BtnAdd>Adicionar</BtnAdd>
        {/* <BtnRemove>Remover</BtnRemove> */}
      </TextContainer>
    </CardContainer>
  );
}

export default MenuItemCard;
