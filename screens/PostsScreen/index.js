import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

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
            <ErrorMessage
              textStyle={styles.errorText}
              text="Unable to retrieve Posts, please refetch."
            />
            <Button onPress={onFetch} title="Refetch" color="#000" />
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

export default PostsScreenContainer(PostsScreen);
