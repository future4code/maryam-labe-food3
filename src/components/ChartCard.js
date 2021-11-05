import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ChartCard = ({ items }) => {
  const { itemsAmount } = useContext(GlobalContext);
  return (
    <div>
      <div key={items.id}>
        <img src={items.photoUrl} alt="" />
        <h3>{items.name}</h3>
        <p>{items.price}</p>
        <p>Quantidade: {itemsAmount}</p>
      </div>
    </div>
  );
};

export default ChartCard;
