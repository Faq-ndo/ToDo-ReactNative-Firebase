import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from "react-native";
import firebase from "../firebase/firebase";

import { withTranslation, useTranslation } from 'react-i18next';


class Login extends React.Component {
  
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoading: false,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  userLogin = () => {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Enter details to signin!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          this.setState({
            isLoading: false,
            email: "",
            password: "",
          });
          this.props.navigation.navigate("Dashboard");
        })
        .catch((error) => this.setState({ errorMessage: error.message }));
    }
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
          placeholder={t('Email')}
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, "email")}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder={t("Password")}
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, "password")}
          maxLength={15}
          secureTextEntry={true}
        />
        <Button color="#73419c" title={t("Signin")} onPress={() => this.userLogin()} />

        <Text style={styles.loginText} onPress={() => this.props.navigation.navigate("Signup")}>
          {t("Don't have account? Click here to signup")}
        </Text>
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
    color: "#697aa0",
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


export default withTranslation()(Login);
