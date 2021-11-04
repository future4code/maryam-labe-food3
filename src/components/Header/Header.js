import React, { useContext } from "react";
import { DivHeader } from './HeaderStyles';
import { GlobalContext } from '../../context/GlobalContext'
import Typography from '@mui/material/Typography';
import { goBack } from '../../routes/coordinator'
import ArrowButton from '../ArrowButton/ArrowButton'
import { useHistory } from "react-router";

export default function Header() {

  const {headerName, changePage} = useContext(GlobalContext) 

  return (
    <DivHeader>
          {changePage === true ? <ArrowButton onClick={goBack} /> : <></>}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {headerName}
          </Typography>
    </DivHeader>
  );
}