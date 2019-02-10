import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";

import PostsScreen from "../screens/PostsScreen";
import AlbumsScreen from "../screens/AlbumsScreen";
import ToDosScreen from "../screens/ToDosScreen";

const PostsStack = createStackNavigator({
  Posts: PostsScreen
});

PostsStack.navigationOptions = {
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

const MainTabNavigator = createBottomTabNavigator({
  PostsStack,
  AlbumsStack,
  ToDosStack
});

export default MainTabNavigator;
