import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import UsersScreen from "../screens/UsersScreen";

import MainTabNavigator from "./MainTabNavigator";

const UsersStack = createStackNavigator({
  Users: {
    screen: UsersScreen,
    navigationOptions: {
      title: "SCB Book"
    }
  }
});

const AppNavigator = createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    User: UsersStack,
    Main: MainTabNavigator
  })
);

export default AppNavigator;
