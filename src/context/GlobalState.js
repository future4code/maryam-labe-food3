import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import ArrowButton from "../components/ArrowButton/ArrowButton";
import { useHistory } from "react-router";
import { goBack } from "../routes/coordinator";

const GlobalState = (props) => {
  const [headerName, setHeaderName] = useState("");
  const [addCart, setAddcart] = useState([]);
  const [restaurantInfos, setRestaurantInfos] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
  const [changePage, setChangePage] = useState(false);
  const [itemsAmount, setItemsAmount] = useState(0);

  const history = useHistory();

  const data = {
    addCart,
    setAddcart,
    headerName,
    setHeaderName,
    changePage,
    setChangePage,
    restaurantInfos,
    setRestaurantInfos,
    paymentMethod,
    setPaymentMethod,
    itemsAmount,
    setItemsAmount,
  };
  return (
    <div>
      <GlobalContext.Provider value={data}>
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalState;
