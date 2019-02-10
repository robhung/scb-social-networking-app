import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import PostsScreen from "../screens/PostsScreen";
import AlbumsScreen from "../screens/AlbumsScreen";
import ToDosScreen from "../screens/ToDosScreen";

const PostStack = createStackNavigator({
  Posts: PostsScreen
});

PostStack.navigationOptions = {
  tabBarLabel: "Posts",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-chatboxes" : "md-chatboxes"}
    />
  )
};

const AlbumsStack = createStackNavigator({
  Albums: AlbumsScreen
});

AlbumsStack.navigationOptions = {
  tabBarLabel: "Albums",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-albums" : "md-albums"}
    />
  )
};

const ToDosStack = createStackNavigator({
  ToDos: ToDosScreen
});

ToDosStack.navigationOptions = {
  tabBarLabel: "To Do's",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-list${focused ? "-box" : ""}`
          : `md-list${focused ? "-box" : ""}`
      }
    />
  )
};

export default createBottomTabNavigator({
  PostStack,
  AlbumsStack,
  ToDosStack
});
