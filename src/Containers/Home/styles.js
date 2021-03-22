import styled from 'styled-components';

const HomeContainer = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  margin-top: 70px;
`;

const NaversHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const HeaderTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  font-weight: 600;
  color: #212121;
`;
const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 36px;
  justify-content: stretch;
  margin-top: 22px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 470px) {
    grid-template-columns: 1fr;
  }
`;

export { HomeContainer, NaversHeader, HeaderTitle, ContainerCards };
