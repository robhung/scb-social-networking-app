import { compose, lifecycle, withState, withHandlers } from "recompose";
import { connect } from "react-redux";

import { userSelected } from "../../data/redux/actions/user";

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
  onUser: ({ dispatch, navigation }) => user => {
    dispatch(userSelected(user));
    navigation.navigate("Main");
  }
};

const UsersScreenContainer = compose(
  connect(),
  withState("state", "updateState", initialState),
  withHandlers(handlers),
  lifecycle({
    componentDidMount() {
      this.props.onFetch();
    }
  })
);

export default UsersScreenContainer;
