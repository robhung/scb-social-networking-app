import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

import PostCommentsScreenContainer from "../../containers/PostCommentsScreenContainer";

import Comment from "../../components/Comment";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";

import Colors from "../../constants/Colors";

const PostCommentsScreen = ({ onFetch, post, state }) => (
  <View style={styles.wrapper}>
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.postCommentsWrapper}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.body}>{post.body}</Text>
            <View style={styles.separator} />
            {state.comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </View>
        </ScrollView>
      );
    })()}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  postCommentsWrapper: {
    backgroundColor: Colors.SECONDARY,
    borderRadius: 5,
    padding: 12,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    marginTop: 16,
    marginBottom: 24,
    marginHorizontal: 18
  },
  title: {
    color: Colors.WHITE,
    fontWeight: "bold",
    paddingBottom: 12
  },
  body: {
    color: Colors.WHITE,
    fontWeight: "400"
  },
  separator: {
    marginTop: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: Colors.GREY_A100
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

PostCommentsScreen.propTypes = {
  onFetch: PropTypes.func.isRequired,
  state: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    comments: PropTypes.array
  }).isRequired
};

export default PostCommentsScreenContainer(PostCommentsScreen);
