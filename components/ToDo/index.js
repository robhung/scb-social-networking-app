import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const ToDo = ({ todo }) => (
  <View style={styles.wrapper}>
    <Text>{todo.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    marginVertical: 12,
    marginHorizontal: 18,
    alignItems: "center"
  }
});

ToDo.propTypes = {
  todo: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool])
  ).isRequired
};

export default ToDo;
