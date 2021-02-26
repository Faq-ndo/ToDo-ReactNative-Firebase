import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import firebase from "../firebase/firebase";

const LogOutButton = () => {
  const navigation = useNavigation();

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  return (
    <TouchableOpacity onPress={() => signOut()} style={styles.screenContainer}>
      <MaterialIcons name="logout" size={34} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});

export default LogOutButton;
