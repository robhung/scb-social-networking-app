import { compose, lifecycle, withState, withHandlers } from "recompose";
import { connect } from "react-redux";

const initialState = {
  loading: true,
  error: false,
  todos: []
};

const handlers = {
  onFetch: ({ state, updateState, user }) => async () => {
    updateState({ ...state, loading: true });

    await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`)
      .then(response => response.json())
      .then(responseJson => {
        updateState({
          ...state,
          loading: false,
          todos: responseJson
        });
      })
      .catch(error => {
        updateState({ ...state, loading: false, error });
      });
  }
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
