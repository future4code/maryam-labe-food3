import React, { useContext } from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage';
import { GlobalContext } from '../../context/GlobalContext';
import CartItemCard from '../../components/CartItemCard/CartItemCard';
import { ContainerAddress, ContainerRestaurant } from '../../components/CartItemCard/CartItemCardStyles';
import { ScreenContainer } from './ChartPageStyles';
import { Typography } from '@mui/material';
import { primaryColor, secondaryColor } from '../../constants/colors';

const ChartPage = () => {
  const { setHeaderName } = useContext(GlobalContext)
  const product = {
    category: "Pastel",
    description: "Pastel autêntico, feito na hora!",
    id: "3vcYYSOEf8dKeTPd7vHe",
    name: "Pastel",
    photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
    price: 3
  }
  setHeaderName('Meu carrinho')

  useProtectedPage();
  return (
    <div>
      <ContainerAddress>
        <Typography
          variant="body1"
          gutterBottom component="div"
          color={secondaryColor}>
          Endereço de entrega
        </Typography>
        <Typography
          sx={{ lineHeight: 0.5 }}
          variant="body1"
          gutterBottom
          component="div">
          Rua Blablabla, 22
        </Typography>
      </ContainerAddress>
      <ContainerRestaurant>
        <Typography
          variant="body1"
          gutterBottom
          component="div" color={primaryColor}>
          Nome restaurante
        </Typography>
        <Typography
          sx={{ lineHeight: 1 }}
          variant="body1"
          gutterBottom
          component="div"
          color={secondaryColor}>
          Rua Blablabla, 106
        </Typography>
        <Typography
          sx={{ lineHeight: 1 }}
          variant="body1"
          gutterBottom component="div"
          color={secondaryColor}>
          30 - 60 min
        </Typography>
      </ContainerRestaurant>
      <ScreenContainer>
        <CartItemCard product={product} />
        <CartItemCard product={product} />
        <CartItemCard product={product} />
      </ScreenContainer>
    </div>
  );
}

export default ChartPage;
