import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {

    const [headerName, setHeaderName] = useState('')
    const [changePage, setChangePage] = useState(false)
    const [showLine, setShowLine] = useState(true)

    return (
        <div>
            <GlobalContext.Provider value={{headerName, setHeaderName, changePage, setChangePage, showLine, setShowLine}}>
                {props.children}
            </GlobalContext.Provider>
        </div>
    )

}

export default GlobalState