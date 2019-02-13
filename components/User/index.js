import React from "react";
import PropTypes from "prop-types";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "expo";

import { BlackText } from "../StyledText";
import Colors from "../../constants/Colors";

import { widthPercentageToDP as wp } from "../../utils/responsive";

const User = ({ columns, user, onUser }) => {
  const styles = StyleSheet.create({
    wrapper: {
      marginVertical: 12,
      marginHorizontal: wp(9) / columns,
      alignItems: "center",
      height: 128,
      width: 128
    },
    username: {
      fontSize: 15,
      fontWeight: "bold",
      textAlign: "center"
    }
  });
  return (
    <TouchableOpacity style={styles.wrapper} onPress={() => onUser(user)}>
      <Icon.Ionicons
        name={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
        size={64}
        color={Colors.SECONDARY}
      />
      <BlackText style={styles.username}>{user.name}</BlackText>
    </TouchableOpacity>
  );
};

User.propTypes = {
  columns: PropTypes.number.isRequired,
  onUser: PropTypes.func.isRequired,
  user: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object])
  ).isRequired
};

export default User;
