import React, { useContext } from 'react';
import MenuItemCard from '../../components/MenuItemCard/MenuItemCard';
import { GlobalContext } from '../../context/GlobalContext'

const RestaurantPage = () => {

  const {setHeaderName} = useContext(GlobalContext) 

  const pageName = setHeaderName('Restaurante')

  return (
    <div>
      <MenuItemCard />
    </div>
  );
}

export default RestaurantPage;
