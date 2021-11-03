import React, { useEffect, useState } from 'react';
import MenuItemCard from '../../components/MenuItemCard/MenuItemCard';
import { useParams } from 'react-router';
import axios from 'axios';
import { base_url } from '../../constants/urls';
import { headers_token } from '../../constants/headers';

const RestaurantPage = () => {
  const [data, setData] = useState({ restaurant: {} });
  const params = useParams();
  console.log("params2", params);
  console.log("data", data);

  useEffect(() => {
    console.log("cheguei")
    getRestaurantDetails(`${base_url}/fourFoodA/restaurants/${params.restaurantId}`, headers_token);
  }, []);

  const getRestaurantDetails = (url, headers) => {
    console.log("renderizando")
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

  return (
    <div>
      <MenuItemCard restaurant={data && data.restaurant} />
    </div>
  );
}

export default RestaurantPage;
