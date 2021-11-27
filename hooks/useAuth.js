import React, { createContext, useContext } from "react";
import { View, Text } from "react-native";

const AuthContext = createContext({});

export const AuthProvider = (props) => {
  return (
    <AuthContext.Provider value={{ user: null }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
