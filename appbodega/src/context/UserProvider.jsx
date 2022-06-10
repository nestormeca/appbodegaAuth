import { Children, createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = true;
  const setUser = false;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
