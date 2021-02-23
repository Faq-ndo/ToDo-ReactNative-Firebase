import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { View, Text, Button, TextInput, ScrollView, StyleSheet, Alert } from "react-native";
import firebase from "../database/firebase";

const ToDoDetails = (/* props */) => {
  const [todo, setToDo] = useState({
    id: "",
    name: "",
    description: "",
    date: "",
    status: "",
  });

  const initialState = {
    id: "",
    name: "",
    description: "",
    date: "",
    status: "",
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.getToDoById(props.route.params.userId);
  }, []);

  const handleChangeText = (field, value) => {
    setToDo({ ...user, [field]: value });
  };

  const openConfirmAlert = () => {
    Alert.alert("Remove User", "Are you sure ?", [
      { text: "Yes", onPress: () => firebase.deleteToDoById() },
      { text: "No", onPress: () => console.log("caceled") },
    ]);
  };

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#9e9e9e" />
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput value={user.name} onChangeText={(value) => handleChangeText("name", value)} />
      </View>
      <View style={styles.inputGroup}>
        <TextInput value={user.email} onChangeText={(value) => handleChangeText("email", value)} />
      </View>
      <View style={styles.inputGroup}>
        <TextInput value={user.phone} onChangeText={(value) => handleChangeText("phone", value)} />
      </View>
      <View>
        <Button title="Update User" onPress={() => firebase.updateToDo()} />
      </View>
      <View>
        <Button title="Delete User" onPress={() => openConfirmAlert()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  container: {
    flex: 1,
    padding: 35,
  },
});

export default ToDoDetails;
