import React from "react";
import useForm from "./Hooks/useForm";

const SignUpPage = () => {
  const [form, onChange, clearForm] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(form);
    clearForm();
  };
  return (
    <div>
      Cadastro
      <form onSubmit={onSubmitForm}>
        <label>Nome</label>
        <input
          onChange={onChange}
          name={"name"}
          value={form.name}
          type="text"
        />
        <br />
        <label>E-mail</label>
        <input
          onChange={onChange}
          name={"email"}
          value={form.email}
          type="email"
        />
        <br />
        <label>CPF</label>
        <input
          onChange={onChange}
          name={"cpf"}
          value={form.cpf}
          type="text"
          title="Insira um CPF valido"
          pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
        ></input>
        <br />
        <label>Senha</label>
        <input
          onChange={onChange}
          name={"password"}
          value={form.passoword}
          type="password"
          id="txtPassword"
          title="Senha precisa ter minimo de 8 caracteres e pelo menos 1 letra e 1 numero"
          placeholder="Enter Password"
          required
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default SignUpPage;
