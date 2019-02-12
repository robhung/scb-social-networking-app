import React from "react";
import { Text } from "react-native";

import Colors from "../../constants/Colors";

export const BlackText = props => (
  <Text {...props} style={[{ color: Colors.BLACK }, props.style]} />
);
