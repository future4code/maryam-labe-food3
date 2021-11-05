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

  return (
    <div>
      {showCart}
      <Footer />
    </div>
  );
};

export default ChartPage;
