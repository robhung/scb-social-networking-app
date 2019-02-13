import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";

import { BlackText } from "../StyledText";

import Colors from "../../constants/Colors";

const ToDo = ({ todo }) => (
  <View style={styles.wrapper}>
    <View style={styles.checkbox} />
    {todo.completed && <View style={styles.checkboxFull} />}
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
    height: 16.5,
    width: 16,
    borderRadius: 8,
    position: "absolute",
    left: 22,
    backgroundColor: Colors.SECONDARY
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
