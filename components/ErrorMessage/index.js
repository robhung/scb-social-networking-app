import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { ERROR_TEXT } from "../../constants/Colors";

const ErrorMessage = ({ containerStyle, textStyle, text }) => (
  <View style={[styles.wrapper, containerStyle]}>
    <Text style={[styles.text, textStyle]}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    color: ERROR_TEXT
  }
});

ErrorMessage.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  text: PropTypes.string.isRequired
};

ErrorMessage.defaultProps = {
  containerStyle: undefined,
  textStyle: undefined
};

export default ErrorMessage;
