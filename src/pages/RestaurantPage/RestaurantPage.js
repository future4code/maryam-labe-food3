import React, { useEffect, useState } from 'react';
import MenuItemCard from '../../components/MenuItemCard/MenuItemCard';
import { useParams } from 'react-router';
import axios from 'axios';
import { base_url } from '../../constants/urls';
import { headers_token } from '../../constants/headers';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import { ScreenContainer, SubtitleContainer } from './RestaurantPageStyles';
import { Typography, Divider } from '@mui/material';
import useProtectedPage from '../../Hooks/useProtectedPage';

const RestaurantPage = () => {
  useProtectedPage();

  const [data, setData] = useState({ restaurant: {} });
  const params = useParams();

  useEffect(() => {
    getRestaurantDetails(`${base_url}/fourFoodA/restaurants/${params.restaurantId}`, headers_token);
  }, []);

  const getRestaurantDetails = (url, headers) => {
    axios
      .get(url, headers)
      .then(response => {
        console.log("response", response);
        setData(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const productsCards = data && data.restaurant && data.restaurant.products && data.restaurant.products.map(product => {
    return (
      <MenuItemCard product={product} />
    )
  })

  return (
    <ScreenContainer>
      <RestaurantCard restaurant={data && data.restaurant} />
      <SubtitleContainer>
        <Typography variant="subtitle1" gutterBottom component="div" sx={{ textAlign: 'left', m: 0, p: 0 }}>
          <strong>Pratos principais</strong>
          <Divider fullWidth sx={{ border: 1 }}></Divider>
        </Typography>
      </SubtitleContainer>
      {productsCards}
    </ScreenContainer>
  );
}

export default RestaurantPage;
