import React, { useContext } from "react";
import { Typography } from "@mui/material";
import {
  CardContainer,
  ImgWrapper,
  BtnAdd,
  BtnRemove,
  TextContainer,
  ContainerButton,
  ContainerCounter,
} from "./MenuItemCardStyles";
import { GlobalContext } from "../../context/GlobalContext";
import Footer from "../Footer/Footer";

const MenuItemCard = ({ product }) => {
  const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const {
    addCart,
    setAddcart,
    restaurantInfos,
    setRestaurantInfos,
    itemsAmount,
    setItemsAmount,
  } = useContext(GlobalContext);

  const addToCart = (item) => {
    console.log(item);
    const newCart = [...addCart, item];
    setAddcart(newCart);
    if (addCart.id === item.id) {
      setItemsAmount(itemsAmount + 1);
    }
    setRestaurantInfos({
      ...restaurantInfos,
    });
    console.log("restaurant info funcao", restaurantInfos);
    console.log("cart", addCart);
  };

  return (
    <CardContainer sx={{ boxShadow: 1 }}>
      <ContainerCounter>2</ContainerCounter>
      <ImgWrapper src={product.photoUrl} />
      <TextContainer>
        <Typography
          variant="subtitle2"
          gutterBottom
          component="div"
          color="primary"
        >
          <strong>{product.name}</strong>
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          component="div"
          color="secondary"
        >
          {product.description}
        </Typography>
        <Typography variant="subtitle2" gutterBottom component="div">
          <strong>{currency.format(product.price)}</strong>
        </Typography>
        <ContainerButton>
          <BtnAdd onClick={() => addToCart(product)}>adicionar</BtnAdd>
          {/* <BtnRemove>remover</BtnRemove> */}
        </ContainerButton>
      </TextContainer>
      <Footer />
    </CardContainer>
  );
};

export default MenuItemCard;
