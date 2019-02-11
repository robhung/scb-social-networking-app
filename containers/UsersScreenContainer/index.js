import { compose, lifecycle, withState, withHandlers } from "recompose";

const initialState = {
  loading: true,
  error: false,
  users: []
};

const handlers = {
  onFetch: ({ state, updateState }) => async () => {
    updateState({ ...state, loading: true });

    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(responseJson => {
        updateState({
          ...state,
          loading: false,
          users: responseJson
        });
      })
      .catch(error => {
        updateState({ ...state, loading: false, error });
      });
  },
  onUser: ({ navigation }) => user => navigation.navigate("Posts", { user })
};

const UsersScreenContainer = compose(
  withState("state", "updateState", initialState),
  withHandlers(handlers),
  lifecycle({
    componentDidMount() {
      this.props.onFetch();
    }
  })
);

export default UsersScreenContainer;
