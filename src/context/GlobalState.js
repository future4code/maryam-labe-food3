import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import ArrowButton from '../components/ArrowButton/ArrowButton'
import { useHistory } from "react-router";
import { goBack } from '../routes/coordinator'

const GlobalState = (props) => {

    const [headerName, setHeaderName] = useState('')
    const [changePage, setChangePage] = useState(false)

    const history = useHistory();

    return (
        <div>
            <GlobalContext.Provider value={{headerName, setHeaderName, changePage, setChangePage}}>
                {props.children}
            </GlobalContext.Provider>
        </div>
    )

}

export default GlobalState