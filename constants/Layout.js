// Reference: https://medium.com/building-with-react-native/how-to-develop-responsive-uis-with-react-native-1x03-a448097c9503

import { Dimensions, PixelRatio } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const widthPercentageToDP = widthPercent => {
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};
const heightPercentageToDP = heightPercent => {
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

export { widthPercentageToDP, heightPercentageToDP };

export default {
  window: {
    width,
    widthPercentageToDP,
    height,
    heightPercentageToDP
  },
  isSmallDevice: width < 375
};
