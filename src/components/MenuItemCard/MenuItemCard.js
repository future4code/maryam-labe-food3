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

const MenuItemCard = ({ product }) => {
  const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const { addCart, setAddcart } = useContext(GlobalContext);

  const addToCart = (item) => {
    console.log(item);
    const newCart = [...addCart, item];
    setAddcart(newCart);
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
          <BtnAdd onClick={() => addToCart(product.name)}>adicionar</BtnAdd>
          {/* <BtnRemove>remover</BtnRemove> */}
        </ContainerButton>
      </TextContainer>
    </CardContainer>
  );
};

export default MenuItemCard;
