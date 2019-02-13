import React from "react";
import PropTypes from "prop-types";
import { Icon } from "expo";
import { Platform, StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/Colors";

const Comment = ({ comment }) => (
  <View style={styles.wrapper}>
    <View style={styles.emailWrapper}>
      <Icon.Ionicons
        name={Platform.OS === "ios" ? "ios-mail" : "md-mail"}
        size={14}
        color={Colors.WHITE}
      />
      <Text style={styles.email}>{comment.email}</Text>
    </View>
    <Text style={styles.name}>{comment.name}</Text>
    <Text style={styles.body}>{comment.body}</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 8
  },
  name: {
    color: Colors.WHITE,
    fontWeight: "bold",
    paddingBottom: 12
  },
  emailWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  email: {
    color: Colors.WHITE,
    fontWeight: "bold",
    paddingLeft: 4
  },
  body: {
    color: Colors.WHITE,
    fontWeight: "400"
  }
});

Comment.propTypes = {
  comment: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired
};

export default Comment;
