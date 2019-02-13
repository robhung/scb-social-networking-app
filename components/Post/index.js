import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";

const Post = ({ post, onPost }) => (
  <TouchableOpacity style={styles.wrapper} onPress={() => onPost(post)}>
    <Text style={styles.title}>{post.title}</Text>
    <Text style={styles.body}>{post.body}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.SECONDARY,
    borderRadius: 5,
    padding: 12,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    marginVertical: 9,
    marginHorizontal: 18
  },
  title: {
    color: Colors.WHITE,
    fontWeight: "bold",
    paddingBottom: 12
  },
  body: {
    color: Colors.WHITE,
    fontWeight: "400"
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
