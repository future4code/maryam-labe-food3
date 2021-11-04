import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import useProtectedPage from "../../Hooks/useProtectedPage";
import Footer from "../../components/Footer/Footer";

const ChartPage = () => {
  const { addCart, setAddcart } = useContext(GlobalContext);

  console.log("pagina carrinho", addCart);

  const showCart = addCart?.map((item) => {
    return (
      <div key={item.id}>
        <img src={item.photoUrl} alt="" />
        <h3>{item.name}</h3>
        <p>{item.price}</p>
      </div>
    );
  });

  useProtectedPage();
  return (
    <div>
      {showCart}
      <Footer />
    </div>
  );
};

export default ChartPage;
