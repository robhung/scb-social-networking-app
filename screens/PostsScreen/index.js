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
  }
});

export default PostsScreenContainer(PostsScreen);
