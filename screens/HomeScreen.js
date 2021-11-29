import React, { useLayoutEffect, useRef } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";

import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";

import tw from "tailwind-rn";

import Swiper from "react-native-deck-swiper";

const DUMMY_DATA = [
  {
    firstName: "Mcgregor",
    lastName: "Ray",
    occupation: "Worker",
    photoURL:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/Conor_McGregor_2018.jpg",
    age: 27,
  },
  {
    firstName: "Rununu",
    lastName: "Ray",
    occupation: "Worker",
    photoURL: "https://tinder.com/static/tinder.png",
    age: 27,
  },
  {
    firstName: "Mohnish ",
    lastName: "Vats",
    occupation: "Student",
    photoURL:
      "https://lh3.googleusercontent.com/a-/AOh14Gh_0i-CDo5EHZ_ECvF613bi28Iate5eu_dQcr4uzA=s96-c",
    age: 27,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  const swipeRef = useRef(null);
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

      {/* Cards  */}
      <View style={tw("flex-1 -mt-6 ")}>
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DUMMY_DATA}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  textAlign: "left",
                  color: "green",
                },
              },
            },
          }}
          onSwipedLeft={() => {
            console.log("Left");
          }}
          onSwipedRight={() => {
            console.log("Right");
          }}
          renderCard={(card) => (
            <View key={card.firstName} style={tw("bg-white h-3/4 rounded-xl ")}>
              <Image
                style={tw(" absolute top-0 h-full w-full rounded-xl")}
                source={{ uri: card.photoURL }}
              />
              <View
                style={[
                  tw(
                    "bg-white w-full h-20 absolute bottom-0 flex-row justify-between items-center  h-20 px-6 py-2 rounded-b-xl"
                  ),
                  styles.cardShadow,
                ]}
              >
                <View>
                  <Text style={tw("text-xl font-bold")}>
                    {card.firstName} {card.lastName}
                  </Text>

                  <Text>{card.occupation}</Text>
                </View>
                <Text style={tw("text-2xl font-bold")}>{card.age}</Text>
              </View>
            </View>
          )}
        />
      </View>

      {/* ends of cards  */}

      <View style={tw("flex mb-20 flex-row justify-evenly")}>
        <TouchableOpacity
          onPress={() => {
            swipeRef.current.swipeLeft();
          }}
          style={tw(
            "items-center justify-center rounded-full w-16 h-16 bg-red-200"
          )}
        >
          <Entypo size={24} name="cross" color="red" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            swipeRef.current.swipeRight();
          }}
          style={tw(
            "items-center justify-center rounded-full w-16 h-16 bg-green-200"
          )}
        >
          <AntDesign size={24} name="heart" color="green" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export default HomeScreen;
