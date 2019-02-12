import {
  compose,
  lifecycle,
  withHandlers,
  withProps,
  withState
} from "recompose";
import { connect } from "react-redux";

import { API_URL } from "../../data";

import { widthPercentageToDP as wp } from "../../utils/responsive";

const initialState = {
  loading: true,
  error: false,
  albums: []
};

const handlers = {
  onFetch: ({ state, updateState, user }) => async () => {
    updateState({ ...state, loading: true });

    await fetch(`${API_URL}/albums?userId=${user.id}`)
      .then(response => response.json())
      .then(responseJson => {
        updateState({
          ...state,
          loading: false,
          albums: responseJson
        });
      })
      .catch(error => {
        updateState({ ...state, loading: false, error: `${error}` });
      });
  },
  onAlbum: ({ navigation }) => album => {
    navigation.navigate("AlbumPhotos", { album });
  }
};

const AlbumsScreenContainer = compose(
  connect(({ user }) => ({ user })),
  withState("state", "updateState", initialState),
  withProps(() => ({
    columns: Math.round(wp(100) / 172)
  })),
  withHandlers(handlers),
  lifecycle({
    componentDidMount() {
      this.props.navigation.setParams({ user: this.props.user });
      this.props.onFetch();
    }
  })
);

export default AlbumsScreenContainer;
