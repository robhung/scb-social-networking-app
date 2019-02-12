import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";

import { BlackText } from "../StyledText";

import Colors from "../../constants/Colors";

const ToDo = ({ todo }) => (
  <View style={styles.wrapper}>
    <View
      style={
        todo.completed
          ? [styles.checkbox, styles.checkboxFull]
          : styles.checkbox
      }
    />
    <BlackText style={styles.text}>{todo.title}</BlackText>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: Colors.GREY_A100,
    paddingHorizontal: 18,
    alignItems: "center"
  },
  checkbox: {
    height: 24,
    width: 24,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.BLACK,
    marginRight: 8
  },
  checkboxFull: {
    padding: 2,
    backgroundColor: Colors.GREY_A200
  },
  text: {
    paddingVertical: 12,
    paddingRight: 8
  }
});

ToDo.propTypes = {
  todo: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool])
  ).isRequired
};

export default ToDo;
