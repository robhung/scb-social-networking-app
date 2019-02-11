import React from "react";
import PropTypes from "prop-types";
import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "expo";

import { PRIMARY } from "../../constants/Colors";

const Album = ({ album, onAlbum }) => (
  <TouchableOpacity style={styles.wrapper} onPress={() => onAlbum(album)}>
    <Icon.Ionicons
      name={Platform.OS === "ios" ? "ios-images" : "md-images"}
      size={64}
      color={PRIMARY}
    />
    <Text>{album.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    marginVertical: 12,
    marginHorizontal: 18,
    alignItems: "center",
    height: 128,
    width: 128
  }
});

Album.propTypes = {
  album: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
  onAlbum: PropTypes.func.isRequired
};

export default Album;
