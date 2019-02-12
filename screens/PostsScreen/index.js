import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import PostsScreenContainer from "../../containers/PostsScreenContainer";

import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import Post from "../../components/Post";

const PostsScreen = ({ onFetch, onPost, state }) => (
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
          data={state.posts}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          onRefresh={() => onFetch()}
          refreshing={state.loading}
          renderItem={({ item }) => <Post post={item} onPost={onPost} />}
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
  postsContent: {
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

PostsScreen.propTypes = {
  onFetch: PropTypes.func.isRequired,
  onPost: PropTypes.func.isRequired,
  state: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    posts: PropTypes.array
  }).isRequired
};

export default PostsScreenContainer(PostsScreen);
