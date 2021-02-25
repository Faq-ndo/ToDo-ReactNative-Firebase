import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, ActivityIndicator } from 'react-native';
import { ListItem, CheckBox } from 'react-native-elements';
import firebase from '../firebase/firebase';

export default class ToDoDetails extends Component {
  constructor() {
    super();
    this.db = firebase.firestore().collection('tasks');
    this.state = this.state = {
      isLoading: true, 
      tasks: [],
    }
  }

  getDetailsView = () =>  this.props.navigation.navigate('Dashboard');

  componentDidMount() {
    this.unsubscribe = this.db.onSnapshot(this.getCollection);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getCollection = query => {
    const tasks = [];

    query.forEach((doc) => {
      const {uuid, title, description } = doc.data();
      if (uuid === firebase.auth().currentUser.uid) 
      tasks.push({uuid: uuid, title: title, description: description });
    })
    
    this.setState({ tasks, isLoading: false, })
  }

  render() {
  
    return (
      <View>
          {
            this.state.tasks.map((_,key, tasks) => {
              return (
                <ListItem chevron bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title>{tasks[key].title}</ListItem.Title>
                    <ListItem.Subtitle>{tasks[key].description}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              );
            })
          }
        <Button color="#3740FE" title="Volver" onPress={() => this.getDetailsView()}
        />
      </View>
    );
  }
}







 /* render() {

   return (
        <View>
          {
          JSON.stringify(this.state.tasks)                   
          }
          
        </View>
   );
}
 }*/