import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Header } from "react-native-elements";
const ToDoList = () => {
  return (
    <View>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "ToDo List", style: { color: "#fff" } }}
        rightComponent={{ icon: "googleplus", color: "#fff" }}
      />
      <Text>ToDos List</Text>
    </View>
  );
};

export default ToDoList;
