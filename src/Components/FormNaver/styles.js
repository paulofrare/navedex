import styled from 'styled-components';

const ContainerForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 32px;
  grid-gap: 32px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ButtomArea = styled.div`
  width: 176px;
  display: flex;
  justify-self: self-end;
`;
export { ContainerForm, ButtomArea };
