import {
  compose,
  lifecycle,
  withHandlers,
  withProps,
  withState
} from "recompose";
import { connect } from "react-redux";

import { API_URL } from "../../data";
import { userSelected } from "../../data/redux/actions/user";

import { widthPercentageToDP as wp } from "../../utils/responsive";

const initialState = {
  loading: true,
  error: false,
  users: []
};

const handlers = {
  onFetch: ({ state, updateState }) => async () => {
    updateState({ ...state, loading: true });

    await fetch(`${API_URL}/users`)
      .then(response => response.json())
      .then(responseJson => {
        updateState({
          ...state,
          loading: false,
          users: responseJson
        });
      })
      .catch(error => {
        updateState({ ...state, loading: false, error: `${error}` });
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
  withProps(() => ({
    columns: Math.round(wp(100) / 172)
  })),
  withHandlers(handlers),
  lifecycle({
    componentDidMount() {
      this.props.onFetch();
    }
  })
);

export default UsersScreenContainer;
