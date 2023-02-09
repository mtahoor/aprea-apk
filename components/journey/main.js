import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import First from "./first";
import Second from "./second_process";
import Login from "./Login";
import Role from "../screens/role_selection";


const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second_screen" component={Second} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="role" component={Role}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
