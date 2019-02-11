import { compose, lifecycle, withState, withHandlers } from "recompose";
import { connect } from "react-redux";

// import { userSelected } from "../../data/redux/actions/user";

const initialState = {
  loading: true,
  error: false,
  albums: []
};

const handlers = {
  onFetch: ({ state, updateState, user }) => async () => {
    updateState({ ...state, loading: true });

    await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
      .then(response => response.json())
      .then(responseJson => {
        updateState({
          ...state,
          loading: false,
          albums: responseJson
        });
      })
      .catch(error => {
        updateState({ ...state, loading: false, error });
      });
  },
  onAlbum: ({ dispatch, navigation }) => post => {
    // dispatch(userSelected(user));
    navigation.navigate("PostComments", { post });
  }
};

const AlbumsScreenContainer = compose(
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

export default AlbumsScreenContainer;
