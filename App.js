import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { compose, withHandlers, withState } from "recompose";
import { AppLoading, Asset, Font, Icon } from "expo";

import { store } from "./data/redux/store";

import AppNavigator from "./navigation/AppNavigator";

const App = ({
  isLoadingComplete,
  onLoadResourcesAsync,
  skipLoadingScreen,
  updateIsLoadingComplete
}) => (
  <Provider store={store}>
    {(() => {
      if (!isLoadingComplete && !skipLoadingScreen) {
        return (
          <AppLoading
            startAsync={onLoadResourcesAsync}
            onError={this._handleLoadingError}
            onFinish={() => updateIsLoadingComplete(true)}
          />
        );
      } else {
        return (
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        );
      }
    })()}
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default compose(
  withState("isLoadingComplete", "updateIsLoadingComplete", false),
  withHandlers({
    onLoadResourcesAsync: () => async () => {
      return Promise.all([
        Asset.loadAsync([
          require("./assets/images/robot-dev.png"),
          require("./assets/images/robot-prod.png")
        ]),
        Font.loadAsync({
          // This is the font that we are using for our tab bar
          ...Icon.Ionicons.font,
          // We include SpaceMono because we use it in HomeScreen.js. Feel free
          // to remove this if you are not using it in your app
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
        })
      ]);
    },
    onLoadingError: () => error => {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(error);
    }
  })
)(App);
