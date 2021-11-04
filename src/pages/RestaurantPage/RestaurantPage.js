import React, { useEffect, useState, useContext } from 'react';
import MenuItemCard from '../../components/MenuItemCard/MenuItemCard';
import { useParams } from 'react-router';
import axios from 'axios';
import { base_url } from '../../constants/urls';
import { headers_token } from '../../constants/headers';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import { ScreenContainer, SubtitleContainer } from './RestaurantPageStyles';
import { Typography, Divider } from '@mui/material';
import useProtectedPage from '../../Hooks/useProtectedPage';
import { GlobalContext } from '../../context/GlobalContext'

const RestaurantPage = () => {
  useProtectedPage();

  const [data, setData] = useState({ restaurant: {} });
  const params = useParams();
  const { setHeaderName } = useContext(GlobalContext)

  const pageName = setHeaderName('Restaurante')

  useEffect(() => {
    getRestaurantDetails(`${base_url}/fourFoodA/restaurants/${params.restaurantId}`, headers_token);
  }, []);

  const getRestaurantDetails = (url, headers) => {
    axios
      .get(url, headers)
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const categories = data.restaurant && data.restaurant.products && data.restaurant.products
    .map(product => {
      return (product.category)
    })

  const filteredCategories = categories && categories.filter((item, index) => {
    return (categories.indexOf(item) === index)
  })
  console.log("categorias filtradas", filteredCategories)

  const filterProductsByCategory = (category, array) => {
    const filteredArray = array.filter(item => item.category === category);
    return filteredArray;
  }

  const renderCards = () => {
    const listOfProductsByCategory = [];
    const categoryList = filteredCategories && filteredCategories.map(category => {
      return filterProductsByCategory(category, filteredCategories)
    });
    listOfProductsByCategory.push(categoryList);
    return listOfProductsByCategory;
    // for (let category of filteredCategories) {
    //   const filteredProducts = filterProductsByCategory(category);
    //   listOfProcutsByCategory.push(filteredProducts);
    // }
  }
  console.log("render cards", renderCards());

  const productsCards = data && data.restaurant && data.restaurant.products && data.restaurant.products.map(product => {
    return (
      <MenuItemCard key={product.id} product={product} />
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
