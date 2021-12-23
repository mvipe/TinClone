import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-rn";
import useAuth from "../hooks/useAuth";

import { doc, setDoc } from "@firebase/firestore";
import { server } from "../metro.config";

const ModalScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false, presentation: "modal" });
  }, []);

  const { user } = useAuth();
  const [image, setImage] = useState(user.getPhotoUri);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);
  const incompleteForm = !image || !job || !age;

  const updateUserProfile = () => {
    setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      displayName: user.displayName,
      photoUrl: image,
      job: job,
      age: age,
      timestamp: server.timestamp(),
    })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View
      style={[
        tw("flex-1 items-center pl-1"),
        { marginTop: StatusBar.currentHeight },
      ]}
    >
      <Image
        style={tw("h-20 w-full")}
        resizeMode="contain"
        source={{ uri: "https://links.papareact.com/2pf" }}
      />
      <Text style={tw("text-xl text-gray-500 p-2 font-bold")}>
        Welcome {user.displayName}
      </Text>

      <Text style={tw("text-center text-red-400 p-4 font-bold")}>
        Step 1:The Profile Pic
      </Text>

      <TextInput
        value={image}
        onChangeText={(text) => setImage(text)}
        placeholder="Enter a profile pic url"
      />

      <Text style={tw("text-center text-red-400 p-4 font-bold")}>
        Step 2:The Job
      </Text>

      <TextInput
        value={job}
        onChangeText={(text) => setJob(text)}
        placeholder="Enter your occupation"
      />

      <Text style={tw("text-center text-red-400 p-4 font-bold")}>
        Step 3:The Age
      </Text>

      <TextInput
        value={age}
        onChangeText={(text) => setAge(text)}
        placeholder="Enter your age"
      />

      <TouchableOpacity
        disabled={incompleteForm}
        style={[
          tw("w-64 rounded-xl p-3 absolute bottom-10 bg-red-400 text-center"),
          incompleteForm ? tw("bg-gray-400") : tw("bg-red-400"),
        ]}
        onPress={updateUserProfile}
      >
        <Text style={tw("text-center text-white text-xl")}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;
