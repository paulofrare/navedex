import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  max-width: 560px;
  padding-top: 70px;
  margin: 0 auto;
`;

const HeaderNaver = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const ArrowArea = styled.div`
  margin-right: 23px;
  cursor: pointer;
`;
const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 600;
`;

export { Container, HeaderNaver, ArrowArea, Title };
