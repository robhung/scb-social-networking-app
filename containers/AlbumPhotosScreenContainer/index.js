import {
  compose,
  lifecycle,
  withHandlers,
  withProps,
  withState
} from "recompose";

import { API_URL } from "../../data";

import { widthPercentageToDP as wp } from "../../utils/responsive";

const initialState = {
  loading: true,
  error: false,
  index: 0,
  photos: [],
  showModal: false
};

const handlers = {
  onFetch: ({ state, updateState, album }) => async () => {
    updateState({ ...state, loading: true });

    await fetch(`${API_URL}/photos?albumId=${album.id}`)
      .then(response => response.json())
      .then(responseJson => {
        updateState({
          ...state,
          loading: false,
          photos: responseJson
        });
      })
      .catch(error => {
        updateState({ ...state, loading: false, error: `${error}` });
      });
  },
  onPhotoThumb: ({ state, updateState }) => index =>
    updateState({ ...state, index, showModal: true }),
  onToggleModal: ({ state, updateState }) => () =>
    updateState({ ...state, showModal: !state.showModal })
};

const AlbumPhotosScreenContainer = compose(
  withState("state", "updateState", initialState),
  withProps(({ navigation }) => ({
    album: navigation.getParam("album", {}),
    columns: Math.round(wp(100) / 150)
  })),
  withHandlers(handlers),
  lifecycle({
    componentDidMount() {
      this.props.onFetch();
    }
  })
);

export default AlbumPhotosScreenContainer;
