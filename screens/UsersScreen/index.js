import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import UsersScreenContainer from "../../containers/UsersScreenContainer";

import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import User from "../../components/User";

const UsersScreen = ({ onFetch, onUser, state }) => (
  <View style={styles.wrapper}>
    {(() => {
      if (state.loading) return <Loading flex={1} />;
      if (state.error)
        return (
          <View style={styles.errorWrapper}>
            <ErrorMessage
              textStyle={styles.errorText}
              text="Unable to retrieve Users, please refetch."
            />
            <Button onPress={onFetch} title="Refetch" color="#000" />
          </View>
        );

      return (
        <FlatList
          style={styles.usersWrapper}
          contentContainerStyle={styles.usersContent}
          numColumns={2}
          data={state.users}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          onRefresh={() => onFetch()}
          refreshing={state.loading}
          renderItem={({ item }) => <User user={item} onUser={onUser} />}
        />
      );
    })()}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  usersWrapper: {},
  usersContent: {
    alignItems: "center",
    paddingVertical: 12
  },
  errorWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  errorText: {
    fontSize: 18
  }
});

export default UsersScreenContainer(UsersScreen);
