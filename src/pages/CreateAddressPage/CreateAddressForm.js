import React from 'react';
import { ScreenContainer } from './CreateAddressPageStyles';
import useForm from '../../Hooks/useForm';
import { useHistory } from 'react-router';
import axios from 'axios';
import { base_url } from '../../constants/urls';
// import { Button, TextField, Typography } from '@mui/material';

const CreateAddressForm = () => {
  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  })

  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    addAddress()
  }

  const addAddress = () => {
    console.log("form", form);
    axios
      .put(`${base_url}/fourFoodA/address`, form, {
        headers:
        {
          "auth": localStorage.getItem("token"),
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        alert("Endereço adiconado com sucesso");
        //colocar função de redirecionar para feed
        clear();
      })
      .catch(error => {
        alert("Desculpe, houve um erro");
        console.log(error.response)
      })
  }

  return (
    <form onSubmit={onSubmitForm}>
      <ScreenContainer>
        <input
          name="street"
          placeholder="Logradouro"
          type="text"
          required
          onChange={onChange}
        />
        <input
          name="number"
          placeholder="Número"
          type="text"
          required
          onChange={onChange}
        />
        <input
          name="complement"
          placeholder="Complemento"
          type="text"
          required
          onChange={onChange}
        />
        <input
          name="neighbourhood"
          placeholder="Bairro"
          type="text"
          required
          onChange={onChange}
        />
        <input
          name="city"
          placeholder="Cidade"
          type="text"
          required
          onChange={onChange}
        />
        <input
          name="state"
          placeholder="Estado"
          type="text"
          required
          onChange={onChange}
        />
        <button type="submit">salvar</button>
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
