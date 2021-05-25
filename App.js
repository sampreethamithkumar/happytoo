import React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./app/Screens/WelcomeScreen";
import LoginScreen from "./app/Screens/LoginScreen";
import RegisterScreen from "./app/Screens/RegisterScreen";
import color from "./app/config/color";
import DashboardScreen from "./app/Screens/DashboardScreen";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: color.primary,
          height: 150,
        },
        headerTitleStyle: "bold",
      }}
    >
      <Stack.Screen
        name="Home"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerLeft: () => {},
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
