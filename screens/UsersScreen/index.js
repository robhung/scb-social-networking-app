import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

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
          <React.Fragment>
            <ErrorMessage
              containerStyle={styles.errorWrapper}
              text="Unable to retrieve User data."
            />
            <Button onPress={onFetch} title="Refetch" color="#000" />
          </React.Fragment>
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
    paddingTop: 12
  },
  user: {
    height: 50,
    borderWidth: 1
  }
});

export default UsersScreenContainer(UsersScreen);
