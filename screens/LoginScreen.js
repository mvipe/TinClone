import React from "react";
import { View, Text, Button } from "react-native";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const { user } = useAuth();
  const { signInWithGoogle, loading } = useAuth();
  console.log(user);
  return (
    <View>
      <Text>{loading ? "loading ..." : "Login to the app"}</Text>
      <Button title="login" onPress={signInWithGoogle} />
    </View>
  );
};

export default LoginScreen;
