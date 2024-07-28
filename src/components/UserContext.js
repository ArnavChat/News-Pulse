// UserContext.js
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    emailArray: [],
    passwordArray: [],
  });

  const updateUserData = (email, password) => {
    setUserData({
      emailArray: [...userData.emailArray, email],
      passwordArray: [...userData.passwordArray, password],
    });
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
