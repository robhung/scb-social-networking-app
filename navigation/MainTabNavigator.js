import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import HeaderUsers from "../components/HeaderUsers";
import TabBarIcon from "../components/TabBarIcon";

import AlbumPhotosScreen from "../screens/AlbumPhotosScreen";
import AlbumsScreen from "../screens/AlbumsScreen";
import PostCommentsScreen from "../screens/PostCommentsScreen";
import PostsScreen from "../screens/PostsScreen";
import ToDosScreen from "../screens/ToDosScreen";

import Colors from "../constants/Colors";

const PostsStack = createStackNavigator(
  {
    Posts: PostsScreen,
    PostComments: {
      screen: PostCommentsScreen,
      navigationOptions: {
        title: "Post"
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam("user", { name: "SCB Book" }).name,
        headerTintColor: Colors.PRIMARY,
        headerBackTitle: null,
        headerTitleStyle: { color: Colors.BLACK },
        headerRight: <HeaderUsers navigation={navigation} />
      };
    }
  }
);

PostsStack.navigationOptions = {
  tabBarLabel: "Posts",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-chatboxes" : "md-chatboxes"}
    />
  )
};

const AlbumsStack = createStackNavigator(
  {
    Albums: AlbumsScreen,
    AlbumPhotos: {
      screen: AlbumPhotosScreen,
      navigationOptions: {
        title: "Album"
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam("user", { name: "SCB Book" }).name,
        headerTintColor: Colors.PRIMARY,
        headerBackTitle: null,
        headerTitleStyle: { color: Colors.BLACK },
        headerRight: <HeaderUsers navigation={navigation} />
      };
    }
  }
);

AlbumsStack.navigationOptions = {
  tabBarLabel: "Albums",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-albums" : "md-albums"}
    />
  )
};

const ToDosStack = createStackNavigator(
  {
    ToDos: ToDosScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam("user", { name: "SCB Book" }).name,
        headerTintColor: Colors.PRIMARY,
        headerBackTitle: null,
        headerTitleStyle: { color: Colors.BLACK },
        headerRight: <HeaderUsers navigation={navigation} />
      };
    }
  }
);

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

const MainTabNavigator = createBottomTabNavigator(
  {
    PostsStack,
    AlbumsStack,
    ToDosStack
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.PRIMARY
    }
  }
);

export default MainTabNavigator;
