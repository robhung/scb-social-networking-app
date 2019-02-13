import React from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "expo";
import PropTypes from "prop-types";

import Colors from "../../constants/Colors";

const HeaderUsers = ({ navigation }) => (
  <TouchableOpacity
    style={styles.wrapper}
    onPress={() => navigation.navigate("Users")}
  >
    <Icon.Ionicons
      name={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
      size={32}
      color={Colors.WHITE}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 16
  }
});

HeaderUsers.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default HeaderUsers;
