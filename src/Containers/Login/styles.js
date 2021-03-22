import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LoginForm = styled.form`
  width: 448px;
  height: 408px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #212121;
  padding: 40px 32px 40px 32px;
  justify-content: space-between;
  @media (max-width: 650px) {
    border: none;
  }
`;
const InputFormInputs = styled.div`
  display: grid;
  grid-gap: 15px;
  width: 100%;
`;

export { LoginContainer, LoginForm, InputFormInputs };
