import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import UsersScreenContainer from "../../containers/UsersScreenContainer";

import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import User from "../../components/User";

import Colors from "../../constants/Colors";

const UsersScreen = ({ columns, onFetch, onUser, state }) => (
  <View style={styles.wrapper}>
    {(() => {
      if (state.loading) return <Loading flex={1} />;
      if (state.error)
        return (
          <View style={styles.errorWrapper}>
            <ErrorMessage text={state.error} />
            <Button
              onPress={onFetch}
              title="Refetch"
              color={Colors.SECONDARY}
            />
          </View>
        );

      return (
        <FlatList
          style={styles.usersWrapper}
          contentContainerStyle={styles.usersContent}
          numColumns={columns}
          data={state.users}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          onRefresh={() => onFetch()}
          refreshing={state.loading}
          renderItem={({ item }) => (
            <User columns={columns} user={item} onUser={onUser} />
          )}
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
    paddingTop: 8,
    paddingBottom: 24
  },
  errorWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

UsersScreen.propTypes = {
  columns: PropTypes.number.isRequired,
  onFetch: PropTypes.func.isRequired,
  onUser: PropTypes.func.isRequired,
  state: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    users: PropTypes.array
  }).isRequired
};

export default UsersScreenContainer(UsersScreen);
