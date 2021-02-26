import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const LenguageButton = () => {
  return (
    <TouchableOpacity style={styles.screenContainer}>
      <MaterialIcons name="language" size={34} color="white" />
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

export default LenguageButton;
