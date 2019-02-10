import React from "react";
import { Button, ScrollView, StyleSheet } from "react-native";

const UsersScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <Button
      onPress={() => navigation.navigate("Main")}
      title="User 1"
      color="#000"
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default UsersScreen;
