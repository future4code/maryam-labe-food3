import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import useProtectedPage from "../../Hooks/useProtectedPage";
import AddressCard from "../../components/ProfileCard/AddressCard";
import Footer from "../../components/Footer/Footer";
import ChartCard from "../../components/ChartCard";
import useForm from "../../Hooks/useForm";

const ChartPage = () => {
  const {
    addCart,
    setAddcart,
    setHeaderName,
    restaurantInfos,
    paymentMethod,
    setPaymentMethod,
    itemsAmount,
    setChangePage,
    setShowLine,
  } = useContext(GlobalContext);

  const [form, onChange, clearForm] = useForm({});

  setHeaderName("Meu carrinho");
  setChangePage(false);
  setShowLine(true);

  useProtectedPage();

  const showCart = addCart?.map((item) => {
    return <ChartCard key={item.id} items={item} />;
  });

  const pricesFiltered = addCart?.map((item) => {
    return item.price;
  });

  const deliveryFee = restaurantInfos.shipping;

  // const selectPaymentMethod = (e) => {};

  // const prices = pricesFiltered?.reduce((acc, curr) => {
  //   return acc + curr;
  // });

  console.log("filtro preco", pricesFiltered);

  return (
    <div>
      <AddressCard />
      <p>{restaurantInfos.name}</p>
      <p>{restaurantInfos.address}</p>
      <p>{restaurantInfos.deliveryTime} min</p>
      {showCart}
      {/* <h1>Total: {prices}</h1> */}
      <form>
        <p>Forma de Pagamento</p>
        <div>
          <input type="radio" id="dinheiro" value="paymentMethod" />
          <label for="dinheiro"> Dinheiro</label>
          <input type="radio" id="cartão de crédito" value="paymentMethod" />
          <label for="cartão de crédito"> Cartão de Crédito</label>
        </div>
        <button type="submit">Confirmar</button>
      </form>
      <Footer />
    </div>
  );
};

export default ChartPage;
