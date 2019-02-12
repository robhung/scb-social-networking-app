import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/Colors";

const ToDo = ({ todo }) => (
  <View style={styles.wrapper}>
    <Text>{todo.title}</Text>
    <Text>{`${todo.completed}`}</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderColor: Colors.GREY_A100,
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
