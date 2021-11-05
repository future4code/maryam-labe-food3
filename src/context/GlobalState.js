import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";


const GlobalState = (props) => {
  const [headerName, setHeaderName] = useState("");
  const [addCart, setAddcart] = useState([]);
  const [changePage, setChangePage] = useState(false);
  const [showLine, setShowLine] = useState(true)

  const data = {
    addCart,
    setAddcart,
    headerName,
    setHeaderName,
    changePage,
    setChangePage,
    showLine,
    setShowLine
  };
  
  return (
    <div>
      <GlobalContext.Provider value={data}>
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalState