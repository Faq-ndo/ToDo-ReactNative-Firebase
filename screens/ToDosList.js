import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from '../firebase/firebase';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: '',
      title: '',
      description: '',
    }

  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  getCreateView = () =>  this.props.navigation.navigate('ToDoCreate')

  getTasks = () => {
      const db = firebase.firestore();
     db.collection('tasks').onSnapshot(query => {
       const tasks = [];
      query.docs.forEach((doc) => {
       const {uuid, title, description } = doc.data();
      if (uuid === firebase.auth().currentUser.uid) 
          tasks.push({uuid: uuid, title: title, description: description}) 
      })
    console.log(tasks.map((_, key, taks) => taks[key]))
    });
  }
          
  render() {
 this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      email: firebase.auth().currentUser.email,
      uid: firebase.auth().currentUser.uid,
    }   
    return (
      <View style={styles.container}>
        <ListItem onPress={() => this.getTasks()}> 
          <ListItem.Content >
              <ListItem.Title>Tareas asociadas</ListItem.Title>
            </ListItem.Content>
        </ListItem>
        <Button
          color="#3740FE"
          title="Create task"
          onPress={() => this.getCreateView()}
        />
          <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});