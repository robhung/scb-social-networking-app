import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import ToDosScreenContainer from "../../containers/ToDosScreenContainer";

import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import ToDo from "../../components/ToDo";

import Colors from "../../constants/Colors";

const ToDosScreen = ({ onFetch, onToggleCompleted, state }) => (
  <View style={styles.wrapper}>
    {(() => {
      if (state.loading) return <Loading flex={1} />;
      if (state.error)
        return (
          <View style={styles.errorWrapper}>
            <ErrorMessage textStyle={styles.errorText} text={state.error} />
            <Button onPress={onFetch} title="Refetch" />
          </View>
        );

      return (
        <FlatList
          style={styles.postsWrapper}
          contentContainerStyle={styles.postsContent}
          data={state.showCompleted ? state.todos : state.todosIncomplete}
          ListFooterComponent={
            <Button
              style={styles.toggleCompletedButton}
              title={state.showCompleted ? "Hide Completed" : "Show Completed"}
              onPress={onToggleCompleted}
              color={Colors.PRIMARY}
            />
          }
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          onRefresh={() => onFetch()}
          refreshing={state.loading}
          renderItem={({ item }) => <ToDo todo={item} />}
        />
      );
    })()}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  postsWrapper: {},
  postsContent: {},
  errorWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  errorText: {
    fontSize: 18
  },
  toggleCompletedButton: {}
});

ToDosScreen.propTypes = {
  onFetch: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  state: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    todos: PropTypes.array,
    todosIncomplete: PropTypes.array
  }).isRequired
};

export default ToDosScreenContainer(ToDosScreen);
