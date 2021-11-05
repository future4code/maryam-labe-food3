import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import useProtectedPage from "../../Hooks/useProtectedPage";

import Footer from "../../components/Footer/Footer";
import ChartCard from "../../components/ChartCard";

const ChartPage = () => {
  const { addCart, setAddcart, setHeaderName } = useContext(GlobalContext);

  setHeaderName("Meu carrinho");

  useProtectedPage();

  console.log("pagina carrinho", addCart);

  const showCart = addCart?.map((item) => {
    return <ChartCard key={item.id} items={item} />;
  });

  const pricesFiltered = addCart?.map((item) => {
    return item.price;
  });

  const prices = pricesFiltered?.reduce((acc, curr) => {
    return acc + curr;
  });

  console.log("filtro preco", pricesFiltered);

  return (
    <div>
      {showCart}
      <h1>Total: {prices}</h1>
      <Footer />
    </div>
  );
};

export default ChartPage;
