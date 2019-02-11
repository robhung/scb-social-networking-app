import React from "react";
import { Button, ScrollView, StyleSheet } from "react-native";
import { ExpoConfigView } from "@expo/samples";

export default class ToDosScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "User 1",
      headerLeft: (
        <Button
          onPress={() => navigation.navigate("User")}
          title="Users"
          color="#000"
        />
      )
    };
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
