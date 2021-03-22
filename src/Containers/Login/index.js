import React, { useContext } from 'react';
import { Logo } from '../../Assets/icons';
import { LoginContainer, LoginForm, InputFormInputs } from './styles';
import InputForm from '../../Components/Input';
import Button from '../../Components/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Contexts/UserContext';

const Login = () => {
  const email = useForm('', 'email');
  const password = useForm();
  const { userLogin } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (email.validate()) {
      userLogin(email.value, password.value);
    }
  }
  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Logo></Logo>
        <InputFormInputs>
          <InputForm
            label="E-mail"
            type="text"
            placeholder="E-mail"
            {...email}
          ></InputForm>

          <InputForm
            label="Senha"
            type="password"
            placeholder="Senha"
            {...password}
          ></InputForm>
        </InputFormInputs>
        <Button>Entrar</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
