import React, { useEffect, useState } from 'react';
import MenuItemCard from '../../components/MenuItemCard/MenuItemCard';
import { useParams } from 'react-router';
import axios from 'axios';
import { base_url } from '../../constants/urls';

const RestaurantPage = () => {
  const [restaurantDetails, setRestaurantDetails] = useState({})
  const params = useParams();

  useEffect(() => {
    getRestaurantDetails(`${base_url}/fourFoodA/${params.id}`);
  }, [])


  const getRestaurantDetails = (url) => {
    axios
      .get(url)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div>
      <MenuItemCard />
    </div>
  );
}

export default RestaurantPage;
