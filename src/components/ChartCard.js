import React from "react";

const ChartCard = ({ name, image, price, amount, removeItem }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{price}</p>
        <p>Quantidade: {amount}</p>
        <button onClick={removeItem}>Remover</button>
      </div>
    </div>
  );
};

export default ChartCard;
