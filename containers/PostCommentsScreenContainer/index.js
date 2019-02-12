import {
  compose,
  lifecycle,
  withHandlers,
  withProps,
  withState
} from "recompose";

import { API_URL } from "../../data";

const initialState = {
  loading: true,
  error: false,
  comments: []
};

const handlers = {
  onFetch: ({ state, updateState, post }) => async () => {
    updateState({ ...state, loading: true });

    await fetch(`${API_URL}/comments?postId=${post.id}`)
      .then(response => response.json())
      .then(responseJson => {
        updateState({
          ...state,
          loading: false,
          comments: responseJson
        });
      })
      .catch(error => {
        updateState({ ...state, loading: false, error: `${error}` });
      });
  }
};

const PostCommentsScreenContainer = compose(
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
