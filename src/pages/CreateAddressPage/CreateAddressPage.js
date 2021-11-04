import React, { useContext } from 'react';
import CreateAddressForm from './CreateAddressForm';
import { GlobalContext } from '../../context/GlobalContext'
// import { Button, TextField, Typography } from '@mui/material';

const CreateAddressPage = () => {

  const {setChangePage} = useContext(GlobalContext) 

  setChangePage(true)

  return (
    <div>
      <CreateAddressForm />
    </div>
  );
}

export default CreateAddressPage;