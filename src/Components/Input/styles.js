import styled from 'styled-components';

const InputContainer = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 4px;
`;

const Label = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
`;
const Input = styled.input`
  padding-left: 10px;
  height: 40px;
  border: ${(props) => (props.error ? `1px solid #f31` : `1px solid #424242`)};
  box-sizing: border-box;

  ::placeholder {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }
`;

const Error = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export { Label, Input, InputContainer, Error };
