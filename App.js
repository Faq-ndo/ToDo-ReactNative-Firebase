import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./screens/login";
import Signup from "./screens/Signup";
import Dashboard from "./screens/ToDosList";
import ToDoCreate from "./screens/ToDoCreate";
import ToDoDetails from "./screens/ToDoDetails";
import AddToDoButton from "./components/AddToDoButton";
import LogOutButton from "./components/LogOutButton";
import BackButton from "./components/BackButton";
import LenguageButton from "./components/LenguageButton";

import "./config/i18next-config";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Stack = createStackNavigator();

function MyStack() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#30085b",
          height: 116,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: t("app_Sign_up"), headerLeft: () => <BackButton backTo="Login" /> }}
      />
      <Stack.Screen name="Login" component={Login} options={{ title: t("Log In"), headerRight: () => <LenguageButton /> }} />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: t("Dashboard"), headerLeft: () => <AddToDoButton />, headerRight: () => <LogOutButton /> }}
      />
      <Stack.Screen
        name="ToDoCreate"
        component={ToDoCreate}
        options={{
          title: t("Create ToDo"),
          headerLeft: () => <BackButton backTo="Dashboard" />,
          headerRight: () => <LogOutButton />,
        }}
      />
      <Stack.Screen
        name="ToDoDetails"
        component={ToDoDetails}
        options={{ title: t("ToDo Details"), headerLeft: () => <BackButton backTo="Dashboard" /> }}
      />
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
