import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { Icon } from "expo";

import Colors from "../../constants/Colors";

const ErrorMessage = ({ containerStyle, textStyle, text }) => {
  let newText = text;
  if (newText.includes("TypeError: ")) newText = text.slice(11);

  return (
    <View style={[styles.wrapper, containerStyle]}>
      <Icon.Ionicons
        name={Platform.OS === "ios" ? "ios-warning" : "md-warning"}
        size={64}
        color={Colors.ERROR_TEXT}
      />
      <Text style={[styles.text, textStyle]}>{newText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 24,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    color: Colors.ERROR_TEXT
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
