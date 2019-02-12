import {
  compose,
  lifecycle,
  withHandlers,
  withProps,
  withState
} from "recompose";
import { connect } from "react-redux";

const initialState = {
  loading: true,
  error: false,
  comments: []
};

const handlers = {
  onFetch: ({ state, updateState, post }) => async () => {
    updateState({ ...state, loading: true });

    await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
    )
      .then(response => response.json())
      .then(responseJson => {
        updateState({
          ...state,
          loading: false,
          comments: responseJson
        });
      })
      .catch(error => {
        updateState({ ...state, loading: false, error });
      });
  }
};

const PostCommentsScreenContainer = compose(
  connect(({ user }) => ({ user })),
  withState("state", "updateState", initialState),
  withProps(({ navigation }) => ({
    post: navigation.getParam("post", {})
  })),
  withHandlers(handlers),
  lifecycle({
    componentDidMount() {
      this.props.onFetch();
    }
  })
);

export default PostCommentsScreenContainer;
