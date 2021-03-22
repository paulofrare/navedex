import styled from 'styled-components';

const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;
const LogoContainer = styled.div`
  max-width: 145px;
  cursor: pointer;
`;
const Logout = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
`;
const Close = styled.div`
  cursor: pointer;
`;
export { HeaderNav, LogoContainer, Logout, Close };
