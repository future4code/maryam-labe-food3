import React from 'react';
import { ScreenContainer } from './CreateAddressPageStyles';
// import { Button, TextField, Typography } from '@mui/material';

const CreateAddressForm = () => {
  return (
    <form>
      <ScreenContainer>
        <input
          placeholder="Logradouro"
          type="text"
          required
        />
        <input
          placeholder="Número"
          type="text"
          required
        />
        <input
          placeholder="Complemento"
          type="text"
          required
        />
        <input
          placeholder="Bairro"
          type="text"
          required
        />
        <input
          placeholder="Cidade"
          type="text"
          required
        />
        <input
          placeholder="Estado"
          type="text"
          required
        />
        <button>salvar</button>
        {/* <Typography variant="subtitle1" gutterBottom component="div">
         <strong>Meu endereço</strong>
       </Typography>
       <TextField
         sx={{ mb: 2, maxWidth: 400 }}
         label="Logradouro"
         placeholder="Rua / Av"
         required
         fullWidth
       />
       <TextField
         sx={{ mb: 2, maxWidth: 400 }}
         label="Número"
         placeholder="Número"
         required
         fullWidth
       />
       <TextField
         sx={{ mb: 2, maxWidth: 400 }}
         label="Complemento"
         placeholder="Apto / Bloco"
         required
         fullWidth
       />
       <TextField
         sx={{ mb: 2, maxWidth: 400 }}
         label="Bairro"
         placeholder="Bairro"
         required
         fullWidth
       />
       <TextField
         sx={{ mb: 2, maxWidth: 400 }}
         label="Estado"
         placeholder="Estado"
         required
         fullWidth
       />
       <Button
         sx={{ maxWidth: 400 }}
         variant="contained"
         color="primary"
         fullWidth>Salvar</Button> */}
      </ScreenContainer>
    </form>
  );
}

export default CreateAddressForm;
