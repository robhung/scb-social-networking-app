import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import UsersScreen from "../screens/UsersScreen";

import MainTabNavigator from "./MainTabNavigator";

import Colors from "../constants/Colors";

const UsersStack = createStackNavigator({
  Users: {
    screen: UsersScreen,
    navigationOptions: {
      title: "SCB Book",
      headerStyle: { backgroundColor: Colors.PRIMARY },
      headerTitleStyle: { color: Colors.WHITE }
    }
  }
});

const AppNavigator = createAppContainer(
  createSwitchNavigator({
    User: UsersStack,
    Main: MainTabNavigator
  })
);

export default AppNavigator;
