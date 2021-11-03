import React, { useEffect, useState } from 'react';
import MenuItemCard from '../../components/MenuItemCard/MenuItemCard';
import { useParams } from 'react-router';
import axios from 'axios';
import { base_url } from '../../constants/urls';
import { headers_token } from '../../constants/headers';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';

const RestaurantPage = () => {
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
    <div>
      <RestaurantCard restaurant={data && data.restaurant} />
      {productsCards}
    </div>
  );
}

export default RestaurantPage;
