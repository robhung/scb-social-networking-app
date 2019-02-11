import React from "react";
import { Button, ScrollView, StyleSheet } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default class AlbumsScreen extends React.Component {
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
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});