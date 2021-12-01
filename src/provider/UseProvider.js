import React, { useState } from "react";

const userContextDefaultValue = {
  user: { name: "", profileImage: "" },
  setUser: () => {},
};

const UserContext = React.createContext(userContextDefaultValue);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const value = {
    user,
    setUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const constext = React.useContext(UserContext);

  if (!constext) {
    throw new Error("user must be used with in a UserProvider");
  }

  return constext;
};
