import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from '../firebase/firebase';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.db = firebase.firestore().collection('tasks');
    this.state = {
      isLoading: true, 
      tasks: [],
    }

    this.navigate = this.props.navigation.navigate;
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  getCreateView = () =>  this.props.navigation.navigate('ToDoCreate');

  getDetailsView = () => this.props.navigation.navigate('ToDoDetails', {uuidTask: this.db.get('ui')});

  componentDidMount() {
    this.unsubscribe = this.db.onSnapshot(this.getTasks);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getTasks = query => {
    const tasks = [];

    query.forEach((doc) => {
      const { uuid, title, description } = doc.data();
      if (uuid === firebase.auth().currentUser.uid) 
        tasks.push({uuid: uuid, title: title, description: description, uid: doc.id});
    })
    this.setState({ tasks, isLoading: false, })
  }
  
  render() {
    return (
      <View style={styles.container}>
    {
            this.state.tasks.map((_,key, tasks) => {
              return (
                <ListItem chevron bottomDivider key={tasks[key].uuid} onPress={_ => this.props.navigation.navigate('ToDoDetails', {uuidTask: tasks[key].uid})}>
                  <ListItem.Content>
                    <ListItem.Title>{tasks[key].title}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              );
            })
          }
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
  }, 
  listItem: {
    backgroundColor: '#c7c1c1'
  } 
});