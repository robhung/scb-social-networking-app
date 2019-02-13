import React from "react";
import PropTypes from "prop-types";
import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "expo";

import Colors from "../../constants/Colors";

const User = ({ user, onUser }) => (
  <TouchableOpacity style={styles.wrapper} onPress={() => onUser(user)}>
    <Icon.Ionicons
      name={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
      size={64}
      color={Colors.SECONDARY}
    />
    <Text>{user.name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    marginVertical: 12,
    marginHorizontal: 18,
    alignItems: "center",
    height: 128,
    width: 128
  }
});

User.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object])
  ).isRequired,
  onUser: PropTypes.func.isRequired
};

export default User;
