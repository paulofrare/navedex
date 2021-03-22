import React, { useContext } from 'react';
import { HeaderNav, LogoContainer, Logout, Close } from './styles';
import { LogoHeader } from '../../Assets/icons';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';

const Header = () => {
  const { userLogout } = useContext(UserContext);
  const history = useHistory();

  const logOut = async () => {
    userLogout();
    history.push('/login');
  };

  return (
    <HeaderNav>
      <LogoContainer onClick={() => history.push('/')}>
        <LogoHeader />
      </LogoContainer>
      <Close onClick={() => logOut()}>
        <Logout>Sair</Logout>
      </Close>
    </HeaderNav>
  );
};

export default Header;
