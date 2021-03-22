import React, { useContext, useState, useEffect } from 'react';
import { Logo } from '../../Assets/icons';
import { LoginContainer, LoginForm, InputFormInputs } from './styles';
import InputForm from '../../Components/Input';
import Button from '../../Components/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Contexts/UserContext';
import ModalInfo from '../../Components/ModalInfo';

const Login = () => {
  const email = useForm('', 'email');
  const password = useForm();
  const { userLogin, loading, error } = useContext(UserContext);
  const [modalInfo, setModalInfo] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email.validate()) {
      userLogin(email.value, password.value);
    }
  };

  useEffect(() => {
    if (error) setModalInfo(true);
  }, [error]);

  return (
    <LoginContainer>
      {modalInfo && (
        <ModalInfo
          title="Ops!"
          text="Usuário ou senha incorreto. Tente novamente."
          setModalInfo={setModalInfo}
        ></ModalInfo>
      )}
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
        {loading ? <Button>Entrando...</Button> : <Button>Entrar</Button>}
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
