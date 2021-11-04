import React, { useState, useContext } from "react";
import { DivHeader } from './HeaderStyles';
import { GlobalContext } from '../../context/GlobalContext'

const Header = () => {

  const {headerName} = useContext(GlobalContext) 
  
  return (
    <DivHeader>
      <p>{headerName}</p>
    </DivHeader>
  );
}

export default Header;
