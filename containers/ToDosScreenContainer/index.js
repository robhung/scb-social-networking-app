import { compose, lifecycle, withState, withHandlers } from "recompose";
import { connect } from "react-redux";

import { API_URL } from "../../data";

const initialState = {
  loading: true,
  error: false,
  todos: [],
  showCompleted: false
};

const handlers = {
  onFetch: ({ state, updateState, user }) => async () => {
    updateState({ ...state, loading: true });

    await fetch(`${API_URL}/todos?userId=${user.id}`)
      .then(response => response.json())
      .then(responseJson => {
        updateState({
          ...state,
          loading: false,
          todos: responseJson,
          todosIncomplete: responseJson.filter(todo => !todo.completed)
        });
      })
      .catch(error => {
        updateState({ ...state, loading: false, error: `${error}` });
      });
  },
  onToggleCompleted: ({ state, updateState }) => () =>
    updateState({ ...state, showCompleted: !state.showCompleted })
};

const ToDosScreenContainer = compose(
  connect(({ user }) => ({ user })),
  withState("state", "updateState", initialState),
  withHandlers(handlers),
  lifecycle({
    componentDidMount() {
      this.props.navigation.setParams({ user: this.props.user });
      this.props.onFetch();
    }
  })
);

export default ToDosScreenContainer;
