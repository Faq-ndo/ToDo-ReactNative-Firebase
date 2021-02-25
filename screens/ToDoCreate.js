import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../firebase/firebase';


export default class ToDoCreate extends Component {
  
  constructor() {
    super();
    this.state = { 
      userId: firebase.auth().currentUser.uid,
      title: '',
      description: '',
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  addTask = () => {
      const db = firebase.firestore();
      db.collection('tasks').add({uuid: this.state.userId  ,  title: this.state.title, description: this.state.description })
       this.setState({
        task: '',
        title: '',
        description: '',
        isLoading: false
        })
  } 

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>  
        <TextInput
          style={styles.inputStyle}
          placeholder="Title"
          value={this.state.title}
          onChangeText={(val) => this.updateInputVal(val, 'title')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Description"
          value={this.state.description}
          onChangeText={(val) => this.updateInputVal(val, 'description')}
        />
        <Button
          color="#3740FE"
          title="Signup"
          onPress={() =>   {
            this.addTask()
            this.props.navigation.navigate('Dashboard');
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
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});