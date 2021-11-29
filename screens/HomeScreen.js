import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";

import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";

import tw from "tailwind-rn";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  console.log(user);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      {/* Header */}

      <View style={tw("items-center relative flex-row justify-between px-5")}>
        <TouchableOpacity style={tw(" ")} onPress={logout}>
          <Image
            style={tw("h-10 w-10 rounded-full")}
            source={{ uri: user.photoURL }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={tw("h-14 w-14 ")}
            source={require("../assets/t-logo.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={tw(" ")}
          onPress={() => {
            navigation.navigate("Chat");
          }}
        >
          <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
        </TouchableOpacity>
      </View>

      {/* end od Header  */}
      {/* <Text>Home Screen</Text>
      <Button
        title="go to chat screen"
        onPress={() => {
          navigation.navigate("Chat");
        }}
      />

      <Button title="logout" onPress={logout} /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
