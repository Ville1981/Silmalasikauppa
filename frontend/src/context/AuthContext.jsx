import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [kayttaja, setKayttaja] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setKayttaja("Asiakas");
    else setKayttaja(null);
  }, []);

  const kirjauduSisaan = (token) => {
    localStorage.setItem('token', token);
    setKayttaja("Asiakas");
  };

  const kirjauduUlos = () => {
    localStorage.removeItem('token');
    setKayttaja(null);
  };

  return (
    <AuthContext.Provider value={{ kayttaja, kirjauduSisaan, kirjauduUlos }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
