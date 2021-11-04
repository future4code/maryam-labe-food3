import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {

    const [headerName, setHeaderName] = useState('')

    return (
        <div>
            <GlobalContext.Provider value={{headerName, setHeaderName}}>
                {props.children}
            </GlobalContext.Provider>
        </div>
    )

}

export default GlobalState