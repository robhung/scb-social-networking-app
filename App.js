import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { compose, withHandlers, withState } from "recompose";
import { AppLoading, Asset, Font, Icon } from "expo";

import { store } from "./data/redux/store";

import AppNavigator from "./navigation/AppNavigator";

import Colors from "./constants/Colors";

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
    backgroundColor: Colors.WHITE
  }
});

export default compose(
  withState("isLoadingComplete", "updateIsLoadingComplete", false),
  withHandlers({
    onLoadResourcesAsync: () => async () => {
      return Promise.all([
        Asset.loadAsync([]),
        Font.loadAsync({
          ...Icon.Ionicons.font
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
