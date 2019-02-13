import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import { widthPercentageToDP as wp } from "../../constants/Layout";

const PhotoThumb = ({ columns, photo, onPhotoThumb }) => {
  const styles = StyleSheet.create({
    image: {
      height: wp(100) / columns,
      width: wp(100) / columns
    }
  });

  return (
    <TouchableOpacity onPress={onPhotoThumb}>
      <Image style={styles.image} source={{ uri: photo.thumbnailUrl }} />
    </TouchableOpacity>
  );
};

PhotoThumb.propTypes = {
  photo: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
  onPhotoThumb: PropTypes.func.isRequired
};

export default PhotoThumb;
