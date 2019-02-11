import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { PRIMARY } from "../../constants/Colors";

const Loading = ({ color, flex, height, overlay, size, style }) => {
  const styles = StyleSheet.create({
    overlay: {
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: 999999
    },
    loading: {
      flex,
      height,
      justifyContent: "center",
      alignItems: "center"
    }
  });

  return (
    <View style={overlay ? styles.overlay : [styles.loading, style]}>
      <ActivityIndicator color={color || PRIMARY} size={size || "large"} />
    </View>
  );
};

Loading.propTypes = {
  color: PropTypes.string,
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  overlay: PropTypes.bool,
  size: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
};

Loading.defaultProps = {
  color: undefined,
  flex: undefined,
  height: undefined,
  overlay: undefined,
  size: undefined,
  style: undefined
};

export default Loading;
