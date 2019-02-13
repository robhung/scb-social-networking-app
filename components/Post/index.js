import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity } from "react-native";

import { BlackText } from "../StyledText";

const Post = ({ post, onPost }) => (
  <TouchableOpacity style={styles.wrapper} onPress={() => onPost(post)}>
    <BlackText>{post.title}</BlackText>
    <BlackText>{post.body}</BlackText>
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
