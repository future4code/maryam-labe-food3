import React, { useState, useContext } from 'react';
import useProtectedPage from "../../Hooks/useProtectedPage"
import useRequestData from "../../Hooks/useRequestData"
import Footer from "../../components/Footer/Footer"
import { base_url } from "../../constants/urls"
import { GlobalContext } from '../../context/GlobalContext'
import { DivRestaurants, DivImg } from "./FeedPageStyles";
import { useHistory } from "react-router";
import { goToRestaurantDetails } from "../../routes/coordinator"
import { headers_token } from '../../constants/headers';
import { DivSearch, DivCategory, CardStyled, DivCardInfo } from "./FeedPageStyles";
import SearchIcon from '@mui/icons-material/Search';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const FeedPage = () => {
  useProtectedPage();
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const {setHeaderName} = useContext(GlobalContext) 

  setHeaderName('Ifuture')

  const data = useRequestData({}, `${base_url}/fourFoodA/restaurants`);
  const restaurants = data.restaurants
  console.log("lista de restaurantes", restaurants);

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
      console.log("restaurante", restaurant)
      return (
        <CardStyled
          key={restaurant.id}
          onClick={() => goToRestaurantDetails(history, restaurant.id)}>
          <CardMedia
            component="img"
            height="140"
            image={restaurant.logoUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom variant="h5"
              component="div"
              color="primary.main">
              {restaurant.name}
            </Typography>
            <DivCardInfo>
              {restaurant.deliveryTime <= 20 ?
                <Typography variant="body1" color="secondary.main">{restaurant.deliveryTime} min</Typography> :
                <Typography variant="body1" color="secondary.main">{restaurant.deliveryTime - 10} - {restaurant.deliveryTime} min</Typography>
              }
              <Typography variant="body1" color="secondary.main">Frete: R$:{restaurant.shipping},00</Typography>
            </DivCardInfo>
          </CardContent>
        </CardStyled>
      )
    });

  const handleSearch = (event) => {
    setSearch(event.target.value)
  };

  const handleCategory = (value) => {
    setCategorySearch(value)
  };

  return (
    <div>
      <DivSearch>
        <SearchIcon color="secondary" />
        <input placeholder={"Restaurante"} onChange={handleSearch} />
      </DivSearch>
      <DivCategory>
        {restaurantCategory}
      </DivCategory>
      <div>
        {restaurantComponents && restaurantComponents.length > 0 ? restaurantComponents : <p>Não encontramos :(</p>}
      </div>
      <Footer />
    </div>
  );
};

export default FeedPage;
