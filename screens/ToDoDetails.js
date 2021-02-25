import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, ActivityIndicator } from 'react-native';
import { ListItem, CheckBox } from 'react-native-elements';
import firebase from '../firebase/firebase';

export default class ToDoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true, 
      checked: false,
      uuidTask: this.props.route.params.uuidTask,
      tasks: [],
    }
  }

  isChecked = () => { 
    this.setState((state) => {
      state.checked = !this.state.checked
      this.deleteTask(state.checked)
    });
  }

  getDetailsView = () =>  this.props.navigation.navigate('Dashboard');

  componentDidMount() {
    const db = firebase.firestore().collection('tasks').doc(this.state.uuidTask);
    const tasks = [];

    db.get().then((res) => {
      const { title, description } = res.data();
      tasks.push({
        title: title,
        description: description,
        isLoading: false,
      })
      this.setState({tasks, isLoading: false})
    })
  }

  deleteTask = check => {
    const db = firebase.firestore().collection('tasks').doc(this.state.uuidTask);
    if (check) {
    db.delete().then(_ => {
        console.log('eliminado')
        this.getDetailsView()
    })
  } else {
    console.log('No se eliminó!')
  }
  }

  render() {
    console.log(this.state.checked); 
    return (
      <View>
    {
            this.state.tasks.map((_,key, task) => {
              return (
                <ListItem CheckBox ={{ checkedIcon: 'circle',}}>
                   <ListItem.Content> 
                   <ListItem.Title>
                      <CheckBox checked={this.state.checked} onPress={this.isChecked} />
                      {task[key].title}
                      <ListItem.Subtitle>{task[key].description}</ListItem.Subtitle> 
                   </ListItem.Title> 
                   </ListItem.Content>
                </ListItem>
              );
            })
          }
          <Button color="#3740FE" title="Volver" onPress={() => this.getDetailsView()}   />
      </View>
    );
  }
}