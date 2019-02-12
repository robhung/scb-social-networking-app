import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const Comment = ({ comment }) => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>{comment.name}</Text>
    <Text style={styles.text}>{comment.email}</Text>
    <Text style={styles.text}>{comment.body}</Text>
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
