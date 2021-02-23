import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ToDoList from "./screens/ToDosList";
import ToDoDetails from "./screens/ToDoDetails";
import ToDoCreate from "./screens/ToDoCreate";

import Signup from './screens/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './contexts/AuthContext';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Stack = createStackNavigator();
/*
   <Stack.Screen name="AuthProvider" component={AuthProvider} />
      <Stack.Screen name="Signup" component={Signup} />
*/
function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="ToDoList" component={ToDoList} />
      <Stack.Screen name="ToDoDetails" component={ToDoDetails} />
      <Stack.Screen name="ToDoCreate" component={ToDoCreate} />
    </Stack.Navigator>
    );
}

   /* <NavigationContainer>
      <MyStack />
    </NavigationContainer>*/
export default function App() {
   return (
  <React.StrictMode>
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
          <div className="w-100" style={{minWidth: "400px"}}>
            <Router>
              <AuthProvider>
                <Switch>
                  <Route exact path="/ToDoList" component={ToDoList}></Route>
                  <Route paht="/signup" component={Signup} />
                </Switch>
              </ AuthProvider>
            </Router>
          </div>
        </Container>
    </React.StrictMode>
)
  
}
