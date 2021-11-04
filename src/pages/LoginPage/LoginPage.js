import React from "react";
import useForm from "../../Hooks/useForm";
import { goToFeed, goToSignUp } from "../../routes/coordinator";
import { login } from "../../services/SignupLogin";
import { useHistory } from "react-router";
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";
import { Button, TextField, Typography } from "@mui/material";
import {
  ScreenContainer,
  FormContainer,
  BtnSignUpContainer,
} from "./LoginPageStyles";
import logo from "../../assets/red-logo.svg";

const LoginPage = () => {
  useUnprotectedPage();

  const history = useHistory();

  const [form, onChange, clearForm] = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form, clearForm);
    goToFeed(history);
    clearForm();
  };

<<<<<<< HEAD
  const capitalize = (text) => {
    if (typeof text !== "string") return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  // let btnSignUpText = "Não possui cadastro? Clique aqui";
  // btnSignUpText = capitalize(btnSignUpText.toLowerCase());
  // console.log(btnSignUpText);

=======
>>>>>>> master
  return (
    <ScreenContainer>
      <img src={logo} />
      <Typography
        sx={{ mt: 3 }}
        variant="subtitle1"
        gutterBottom
        component="div"
      >
        <strong>Entrar</strong>
      </Typography>
      <FormContainer onSubmit={onSubmitForm}>
        <TextField
          sx={{ mb: 2, maxWidth: 400 }}
          name={"email"}
          type="text"
          onChange={onChange}
          label="Email"
          value={form.name}
          placeholder="email@email.com"
          required
          fullWidth
        />
        <TextField
          sx={{ mb: 2, maxWidth: 400 }}
          name={"password"}
          type="password"
          onChange={onChange}
          label="Senha"
          value={form.password}
          placeholder="Mínimo 6 caracteres"
          required
          fullWidth
          // title="Senha precisa ter minimo de 8 caracteres e pelo menos 1 letra e 1 numero"
          // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        />
        <Button
          sx={{ maxWidth: 400, textTransform: 'none' }}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
        >
          Entrar
        </Button>
      </FormContainer>
      <Button
        sx={{ mt: 3, textTransform: "none", color: "#000000" }}
        variant="text"
        onClick={() => goToSignUp(history)}
      >
        Não possui cadastro? Clique aqui
      </Button>
    </ScreenContainer>
  );
};

export default LoginPage;
