import React, { useContext } from 'react';
import CreateAddressForm from './CreateAddressForm';
import { GlobalContext } from '../../context/GlobalContext'
// import { Button, TextField, Typography } from '@mui/material';

const CreateAddressPage = () => {

  const {setChangePage, setHeaderName, setShowLine} = useContext(GlobalContext) 

  setChangePage(true)
  setHeaderName('')
  setShowLine(true)

  return (
    <div>
      <CreateAddressForm />
    </div>
  );
}

export default CreateAddressPage;