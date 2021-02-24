import React, { useState } from "react";
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import firebase from "../database/firebase";

const SignUp = () => {
  const [state, setState] = useState({ username: "", pass: "", todos: {} });
  const handleChangeText = (field, value) => {
    setState({ ...state, [field]: value });
  };

  return (
    <ScrollView>
      <View>
        <TextInput placeholder="Username" onChangeText={(value) => handleChangeText("username", value)} />
      </View>
      <View>
        <TextInput placeholder="Password" onChangeText={(value) => handleChangeText("pass", value)} />
      </View>
      <View>
        <Button title="Register" onPress={() => firebase.addUser(state)} />
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

export default SignUp;
