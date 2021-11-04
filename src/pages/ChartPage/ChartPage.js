import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import useProtectedPage from "../../Hooks/useProtectedPage";

const ChartPage = () => {
  const { addCart, setCart } = useContext(GlobalContext);

  console.log("pagina carrinho", addCart);

  useProtectedPage();
  return <div>Carrinho</div>;
};

export default ChartPage;
