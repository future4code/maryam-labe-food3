import React, { useState } from 'react';
import useProtectedPage from "../../Hooks/useProtectedPage"
import useRequestData from "../../Hooks/useRequestData"
import Footer from "../../components/Footer/Footer"
import { base_url } from "../../constants/urls"

import { DivRestaurants, DivImg } from "./FeedPageStyles";

const FeedPage = () => {
  // useProtectedPage();
  const [search, setSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");

  const data = useRequestData({}, `${base_url}/fourFoodA/restaurants`);
  const restaurants = data.restaurants

  const restaurantCategory = restaurants && restaurants
    .map((restaurant) => {
      return (
        <button onClick={() => handleCategory(restaurant.category)} key={restaurant.id}>{restaurant.category}</button>
      )
    });

  const restaurantComponents = restaurants && restaurants
    .filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(search.toLowerCase())
    })
    .filter((restaurant) => {
      return restaurant.category.toLowerCase().includes(categorySearch.toLowerCase())
    })
    .map((restaurant) => {
      return (
        <DivRestaurants key={restaurant.id}>
          <DivImg>
            <img src={restaurant.logoUrl} />
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

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleCategory = (value) => {
    setCategorySearch(value)
  }

  return (
    <div>
      <div>
        <input placeholder={"Restaurante"} onChange={handleSearch} />
      </div>
      <div>
        <p>Opções Restaurante:</p>
        {restaurantCategory}
      </div>
      <div>
        {restaurantComponents}
      </div>
      <Footer />
    </div>
  );
}

export default FeedPage;
