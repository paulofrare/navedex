import styled from 'styled-components';

const Btn = styled.button`
  background-color: ${(props) => (props.white ? `#ffffff` : `#212121`)};
  height: 40px;
  color: ${(props) => (props.white ? `#212121` : `#ffffff`)};
  border: none;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  transition: 0.2s;
  border: 1px solid #212121;
`;
export { Btn };
