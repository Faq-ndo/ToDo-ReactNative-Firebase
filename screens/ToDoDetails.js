import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { ListItem, CheckBox } from "react-native-elements";
import firebase from "../firebase/firebase";

export default class ToDoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      checked: false,
      uuidTask: this.props.route.params.uuidTask,
      tasks: [],
    };
    this.db = firebase.firestore().collection("tasks").doc(this.state.uuidTask);
  }

  getDetailsView = () => this.props.navigation.navigate("Dashboard");

  isChecked = () => {
    this.setState((state) => {
      state.checked = !this.state.checked;
      this.deleteTask(state.checked);
    });
  };

  componentDidMount() {
    const tasks = [];

    this.db.get().then((res) => {
      const { title, description } = res.data();
      tasks.push({ title: title, description: description });

      this.setState({ tasks, isLoading: false });
    });
  }

  deleteTask = (check) => {
    if (check) this.db.delete().then(() => this.getDetailsView());
  };

  render() {
    return (
      <View>
        {this.state.tasks.map((_, key, task) => {
          return (
            <ListItem>
              <ListItem.Content style={styles.container}>
                <CheckBox checked={this.state.checked} onPress={this.isChecked} />
                <ListItem.Content style={styles.textContainer}>
                  <ListItem.Title style={styles.title}>{task[key].title}</ListItem.Title>
                  <ListItem.Subtitle style={styles.subtitle}>{task[key].description}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
  },
});
