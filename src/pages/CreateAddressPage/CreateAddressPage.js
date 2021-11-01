import React from 'react';
import { ScreenContainer } from './CreateAddressPageStyles';
import { Button, TextField, Typography } from '@mui/material';

const CreateAddressPage = () => {
  return (
    <ScreenContainer>
      <Typography variant="subtitle1" gutterBottom component="div">
        <strong>Meu endereço</strong>
      </Typography>
      <TextField
        sx={{ mb: 2 }}
        label="Logradouro"
        placeholder="Rua / Av"
        required
        fullWidth
      />
      <TextField
        sx={{ mb: 2 }}
        label="Número"
        placeholder="Número"
        required
        fullWidth
      />
      <TextField
        sx={{ mb: 2 }}
        label="Complemento"
        placeholder="Apto / Bloco"
        required
        fullWidth
      />
      <TextField
        sx={{ mb: 2 }}
        label="Bairro"
        placeholder="Bairro"
        required
        fullWidth
      />
      <TextField
        sx={{ mb: 2 }}
        label="Estado"
        placeholder="Estado"
        required
        fullWidth
      />
      <Button variant="contained" color="primary" fullWidth>Salvar</Button>
    </ScreenContainer>
  );
}

export default CreateAddressPage;
