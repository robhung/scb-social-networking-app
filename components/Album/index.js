import React from "react";
import PropTypes from "prop-types";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "expo";

import { BlackText } from "../StyledText";

import { widthPercentageToDP as wp } from "../../utils/responsive";

import Colors from "../../constants/Colors";

const Album = ({ album, columns, onAlbum }) => {
  const styles = StyleSheet.create({
    wrapper: {
      height: wp(100) / columns,
      width: wp(100) / columns - 36,
      marginHorizontal: 12,
      marginVertical: 12
    },
    touchable: {
      borderRadius: 5,
      opacity: 0.4,
      backgroundColor: Colors.GREY_A100,
      alignItems: "center",
      justifyContent: "center",
      height: wp(100) / columns - 36,
      width: wp(100) / columns - 36
    },
    title: {
      fontSize: 15,
      fontWeight: "500",
    }
  });
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.touchable} onPress={() => onAlbum(album)}>
        <Icon.Ionicons
          name={Platform.OS === "ios" ? "ios-images" : "md-images"}
          size={wp(100) / columns / 3}
          color={Colors.SECONDARY}
        />
      </TouchableOpacity>
      <BlackText style={styles.title}>{album.title}</BlackText>
    </View>
  );
};

Album.propTypes = {
  album: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
  columns: PropTypes.number.isRequired,
  onAlbum: PropTypes.func.isRequired
};

export default Album;
