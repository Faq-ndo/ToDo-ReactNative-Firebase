import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ToDoList from "./screens/ToDosList";
import ToDoDetails from "./screens/ToDoDetails";
import ToDoCreate from "./screens/ToDoCreate";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ToDoList" component={ToDoList} />
      <Stack.Screen name="ToDoDetails" component={ToDoDetails} />
      <Stack.Screen name="ToDoCreate" component={ToDoCreate} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
