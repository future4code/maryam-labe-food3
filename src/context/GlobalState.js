import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
  const [headerName, setHeaderName] = useState("");
  const [addCart, setAddcart] = useState([]);

  const data = {
    addCart,
    setAddcart,
    headerName,
    setHeaderName,
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
