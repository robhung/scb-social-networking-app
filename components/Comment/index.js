import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";

import { BlackText } from "../StyledText";

const Comment = ({ comment }) => (
  <View style={styles.wrapper}>
    <BlackText style={styles.text}>{comment.name}</BlackText>
    <BlackText style={styles.text}>{comment.email}</BlackText>
    <BlackText style={styles.text}>{comment.body}</BlackText>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    marginVertical: 12,
    marginHorizontal: 18
  },
  text: {
    marginVertical: 4
  }
});

Comment.propTypes = {
  comment: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired
};

export default Comment;
