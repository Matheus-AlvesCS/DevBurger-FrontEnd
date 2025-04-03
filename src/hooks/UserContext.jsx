import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const putUserInfo = (userData) => {
    setUserInfo(userData);

    localStorage.setItem("devburger:userData", JSON.stringify(userData));
  };

  const logout = () => {
    setUserInfo({});
    localStorage.removeItem("devburger:userData");
  };

  useEffect(() => {
    const localStorageOfUser = localStorage.getItem("devburger:userData");

    if (localStorageOfUser) {
      setUserInfo(JSON.parse(localStorageOfUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, putUserInfo, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be a valid context.");
  }

  return context;
};
