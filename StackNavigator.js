import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";
import useAuth from "./hooks/useAuth";
import ModalScreen from "./screens/ModalScreen";
import RApp from "./screens/testScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const { user } = useAuth();
  return (
    <Stack.Navigator defaultScreenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
          </Stack.Group>

          <Stack.Group screenOptions={{ presentation: "card" }}>
            <Stack.Screen
              name="Modal"
              component={ModalScreen}
              presentation="modal"
              options={{ presentation: "modal" }}
            />
          </Stack.Group>
        </>
      ) : (
        // <Stack.Screen name="test" component={RApp} />
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}
