import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Post = ({ post, onPost }) => (
  <TouchableOpacity style={styles.wrapper} onPress={() => onPost(post)}>
    <Text>{post.title}</Text>
    <Text>{post.body}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    marginVertical: 12,
    marginHorizontal: 18,
    alignItems: "center"
  }
});

Post.propTypes = {
  post: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
  onPost: PropTypes.func
};

Post.defaultProps = {
  onPost: undefined
};

export default Post;
