import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import DatePicker from "react-native-datepicker";
import firebase from "../database/firebase";

const ToDoCreate = (props) => {
  const [state, setState] = useState({ name: "", description: "", date: "", status: "PENDING" });

  const handleChangeText = (field, value) => {
    setState({ ...state, [field]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Name" onChangeText={(value) => handleChangeText("name", value)} />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Description" onChangeText={(value) => handleChangeText("description", value)} />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Date DD-MM-YYYY" onChangeText={(value) => handleChangeText("date", value)} />
      </View>
      {/*       <View style={styles.inputGroup}>
        <DatePicker
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onChangeDate={(value) => handleChangeText("date", value)}
        />
      </View> */}
      <View>
        <Button title="Save ToDo" onPress={() => firebase.addToDo(state)} />
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

export default ToDoCreate;
