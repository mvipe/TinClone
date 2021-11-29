import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-rn";

const LoginScreen = () => {
  const { user } = useAuth();
  const { signInWithGoogle, loading } = useAuth();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  console.log(user);
  return (
    <View style={tw("flex-1")}>
      <ImageBackground
        resizeMode="cover"
        style={tw("flex-1")}
        source={{ uri: "https://tinder.com/static/tinder.png" }}
      >
        <TouchableOpacity
          style={[
            tw("absolute bottom-40 w-52 bg-white p-4 rounded-2xl "),
            { marginHorizontal: "25%" },
          ]}
          onPress={signInWithGoogle}
        >
          <Text style={tw(" font-bold text-center")}>
            Sign In & Get Swaping
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
    // <View>
    //   <Text>{loading ? "loading ..." : "Login to the app"}</Text>
    //   <Button title="login" onPress={signInWithGoogle} />
    // </View>
  );
};

export default LoginScreen;
