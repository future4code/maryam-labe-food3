import React, { useContext, useEffect } from "react";
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
    setChangePage,
    setShowLine,
    priceToPay,
    setPriceToPay,
  } = useContext(GlobalContext);

  const [form, onChange, clearForm] = useForm({});
  const deliveryFee = restaurantInfos.shipping;
  setHeaderName("Meu carrinho");
  setChangePage(false);
  setShowLine(true);

  useProtectedPage();

  useEffect(() => {
    let newPrice = 0;
    addCart.forEach((item) => {
      newPrice += item.price * item.amount;
    });
    setPriceToPay(newPrice);
  }, [addCart]);

  const removeItem = (itemToRemove) => {
    const position = addCart.findIndex((item) => {
      return item.id === itemToRemove.id;
    });

    let newCart = [...addCart];

    if (newCart[position].amount === 1) {
      newCart.splice(position, 1);
    } else {
      newCart[position].amount -= 1;
    }

    setAddcart(newCart);
  };

  const showCart =
    addCart.length === 0 ? (
      <h1>Carrinho Vazio</h1>
    ) : (
      addCart.map((item) => {
        return (
          <ChartCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.photoUrl}
            amount={item.amount}
            deliveryFee={deliveryFee}
            removeItem={() => removeItem(item)}
          />
        );
      })
    );

  return (
    <div>
      {addCart > 0 ? <AddressCard /> : null}
      {restaurantInfos && addCart.length > 0 ? (
        <p>{restaurantInfos.name}</p>
      ) : null}
      {restaurantInfos && addCart.length > 0 ? (
        <p>{restaurantInfos.address}</p>
      ) : null}
      {restaurantInfos && addCart.length > 0 ? (
        <p>{restaurantInfos.deliveryTime} Min </p>
      ) : null}
      {showCart}
      {console.log("deliveryfee", deliveryFee)}
      {deliveryFee && addCart.length > 0 ? (
        <p>Frete: R$ {deliveryFee.toFixed(2)}</p>
      ) : null}
      {priceToPay ? <p>Total: R$ {priceToPay.toFixed(2)}</p> : null}
      <Footer />
    </div>
  );
};

export default ChartPage;
