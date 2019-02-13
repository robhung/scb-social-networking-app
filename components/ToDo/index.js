import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";

import { BlackText } from "../StyledText";

import Colors from "../../constants/Colors";

const ToDo = ({ todo }) => (
  <View
    style={
      todo.completed
        ? [styles.wrapper, styles.wrapperCompleted]
        : styles.wrapper
    }
  >
    <View style={styles.checkbox} />
    {todo.completed && <View style={styles.checkboxFull} />}
    <BlackText
      style={todo.completed ? [styles.text, styles.textCompleted] : styles.text}
    >
      {todo.title}
    </BlackText>
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
  wrapperCompleted: {
    opacity: 0.7
  },
  checkbox: {
    height: 24,
    width: 24,
    borderWidth: 1,
    borderRadius: 12,
    position: "absolute",
    left: 18,
    top: 12,
    borderColor: Colors.BLACK
  },
  checkboxFull: {
    height: 16,
    width: 16,
    borderRadius: 8,
    position: "absolute",
    left: 22,
    top: 16,
    backgroundColor: Colors.SECONDARY
  },
  text: {
    marginLeft: 32,
    paddingVertical: 12,
    paddingRight: 8
  },
  textCompleted: {
    color: Colors.SECONDARY
  }
});

ToDo.propTypes = {
  todo: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool])
  ).isRequired
};

export default ToDo;
