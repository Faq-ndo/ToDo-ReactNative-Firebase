import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackButton = ({ backTo }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(backTo)} style={styles.screenContainer}>
      <AntDesign name="back" size={34} color="white" />
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

export default BackButton;
