import React from "react";
import { StyleSheet, View, TextInput, Button, ActivityIndicator } from "react-native";
import firebase from "../firebase/firebase";

import { withTranslation, useTranslation } from 'react-i18next';

class ToDoCreate extends React.Component {

  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.uid,
      title: "",
      description: "",
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  addTask = () => {
    const db = firebase.firestore();
    db.collection("tasks").add({ uuid: this.state.userId, title: this.state.title, description: this.state.description });
    this.setState({
      task: "",
      title: "",
      description: "",
      isLoading: false,
    });
  };

  render() {
    const { t } = this.props;

    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder={t("Title")}
          value={this.state.title}
          onChangeText={(val) => this.updateInputVal(val, "title")}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder={t("Description")}
          value={this.state.description}
          onChangeText={(val) => this.updateInputVal(val, "description")}
        />
        <Button
          color="#73419c"
          title={t("Create")}
          onPress={() => {
            this.addTask();
            this.props.navigation.navigate("Dashboard");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: "#fff",
  },
  inputStyle: {
    width: "100%",
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#7f659c",
    borderBottomWidth: 1,
  },
  loginText: {
    color: "#3740FE",
    marginTop: 25,
    textAlign: "center",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});


export default withTranslation()(ToDoCreate);