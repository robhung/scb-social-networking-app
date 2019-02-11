import React from "react";
import { Button, ScrollView, StyleSheet } from "react-native";
import { ExpoLinksView } from "@expo/samples";

import AlbumsScreenContainer from '../../containers/AlbumsScreenContainer';

const AlbumsScreen = () => (
  <ScrollView style={styles.container}>
    {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
    <ExpoLinksView />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default AlbumsScreenContainer(AlbumsScreen);
