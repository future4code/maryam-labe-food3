import React from 'react';
import useProtectedPage from "../../Hooks/useProtectedPage"
import useRequestData from "../../Hooks/useRequestData"
import Footer from "../../components/Footer/Footer"
import {base_url} from "../../constants/urls"

import { DivRestaurants, DivImg } from "./FeedPageStyles";

const FeedPage = () => {
  // useProtectedPage();
  
  const data = useRequestData({}, `${base_url}/fourFoodA/restaurants`);
  const restaurants = data.restaurants

  const restaurantCategory = restaurants && restaurants.map((restaurant) => {
    return (
      <option value={restaurant.category} key={restaurant.id}>{restaurant.category}</option>
    )
  });

  const restaurantComponents = restaurants && restaurants.map((restaurant) => {
    return (
      <DivRestaurants key={restaurant.id}>
        <DivImg>
          <img src={restaurant.logoUrl}/>
        </DivImg>
        <p>{restaurant.name}</p>
        {restaurant.deliveryTime <= 20 ? 
          <p>{restaurant.deliveryTime} min</p> : 
          <p>{restaurant.deliveryTime - 10} - {restaurant.deliveryTime} min</p>
        }
        <p>Frete: R$:{restaurant.shipping},00</p>
      </DivRestaurants>
    )
  });

  

  return (
    <div>
      <div>
        <input placeholder={"Restaurante"}/>
      </div>
      <div>
        <p>Opções Restaurante:</p>
        <select>
          {restaurantCategory}
        </select>
      </div>
      <div>
        {restaurantComponents}
      </div>
      <Footer />
    </div>
  );
}

export default FeedPage;
