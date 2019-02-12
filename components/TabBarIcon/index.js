import React from "react";
import { Icon } from "expo";

import Colors from "../../constants/Colors";

const TabBarIcon = ({ focused, name }) => (
  <Icon.Ionicons
    name={name}
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.TAB_ICON_SELECTED : Colors.TAB_ICON_DEFAULT}
  />
);

export default TabBarIcon;
