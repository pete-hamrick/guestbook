import { useContext, createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(EntryContext);

  if (context === undefined) {
    throw new Error('useUser must be used within an UserContext Provider');
  }

  return context;
};

export { UserProvider, useUser };
