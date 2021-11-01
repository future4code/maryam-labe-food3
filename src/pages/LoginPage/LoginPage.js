import React from "react";
import useForm from "../../Hooks/useForm";
import { login } from "../../services/SignupLogin";

const LoginPage = () => {
  const [form, onChange, clearForm] = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form, clearForm);
    clearForm();
  };
  return (
    <div>
      <h3>Login Page</h3>
      <form onSubmit={onSubmitForm}>
        <label>Username:</label>
        <input
          onChange={onChange}
          name={"email"}
          value={form.name}
          type="text"
          placeholder="Enter your email"
        />
        <br />
        <label>Password:</label>
        <input
          onChange={onChange}
          name={"password"}
          value={form.password}
          type="password"
          placeholder="Enter your password"
          title="Senha precisa ter minimo de 8 caracteres e pelo menos 1 letra e 1 numero"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        />
        <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
