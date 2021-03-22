import { useState, createContext, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchLogin } from '../Services/loginService';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [login, setLogin] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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

  const userLogin = async (username, password) => {
    try {
      setError(false);
      setLoading(true);
      const res = await fetchLogin(username, password);
      setLogin(true);
      setToken(res.token);
      window.localStorage.setItem('token', res.token);
      setLoading(false);
      history.push('/');
    } catch (err) {
      setLoading(false);
      setLogin(false);
      setError(true);
    }
  };

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
    <UserContext.Provider
      value={{ userLogin, userLogout, login, token, loading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
