import React from 'react';
import { CardContainer, ImgWrapper } from './RestaurantCardStyles';

const RestaurantCard = () => {
  return (
    <CardContainer>
      <ImgWrapper src="https://s2.glbimg.com/9zc9T-9LwXwKG_8XOq_9EF67bSQ=/620x455/e.glbimg.com/og/ed/f/original/2021/04/30/receita-hamburguer-smash-burguer-bacon-cheddaar.jpg" />
      <div>
        <h5>Bullger</h5>
        <p>Pão, carne, queijo, picles e molho</p>
        <h6>R$20,00</h6>
        <button>adicionar</button>
      </div>
    </CardContainer>
  );
}

export default RestaurantCard;
