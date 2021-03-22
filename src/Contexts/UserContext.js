import { useState, createContext, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchLogin } from '../Services/loginService';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [login, setLogin] = useState(null);
  const [token, setToken] = useState(null);
  const history = useHistory();

  const userLogout = useCallback(
    async function () {
      setLogin(false);
      setToken(null);
      window.localStorage.removeItem('token');
      history.push('/login');
    },
    [history],
  );

  async function userLogin(username, password) {
    try {
      const res = await fetchLogin(username, password);
      setLogin(true);
      setToken(res.token);
      window.localStorage.setItem('token', res.token);
      history.push('/');
    } catch (err) {
      setLogin(false);
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const storageToken = window.localStorage.getItem('token');
      if (!storageToken) userLogout();
      else {
        setLogin(true);
        setToken(storageToken);
        history.push('/');
      }
    }
    autoLogin();
  }, [userLogout, history]);

  return (
    <UserContext.Provider value={{ userLogin, userLogout, login, token }}>
      {children}
    </UserContext.Provider>
  );
};
