import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import PostCommentsScreenContainer from "../../containers/PostCommentsScreenContainer";

import Comment from "../../components/Comment";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import Post from "../../components/Post";

const PostCommentsScreen = ({ onFetch, post, state }) => (
  <View style={styles.wrapper}>
    <Post post={post} />
    {(() => {
      if (state.loading) return <Loading flex={1} />;
      if (state.error)
        return (
          <View style={styles.errorWrapper}>
            <ErrorMessage
              textStyle={styles.errorText}
              text="Unable to retrieve Comments, please refetch."
            />
            <Button onPress={onFetch} title="Refetch" color="#000" />
          </View>
        );

      return (
        <FlatList
          style={styles.commentsWrapper}
          contentContainerStyle={styles.commentsContent}
          data={state.comments}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          onRefresh={() => onFetch()}
          refreshing={state.loading}
          renderItem={({ item }) => <Comment comment={item} />}
        />
      );
    })()}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  commentsWrapper: {},
  commentsContent: {
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

export default PostCommentsScreenContainer(PostCommentsScreen);
