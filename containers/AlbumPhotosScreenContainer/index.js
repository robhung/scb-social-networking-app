import {
  compose,
  lifecycle,
  withHandlers,
  withProps,
  withState
} from "recompose";

import { widthPercentageToDP as wp } from "../../utils/responsive";

const initialState = {
  loading: true,
  error: false,
  photos: []
};

const handlers = {
  onFetch: ({ state, updateState, album }) => async () => {
    updateState({ ...state, loading: true });

    await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`
    )
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
  onPhotoThumb: ({ navigation }) => album => {
    // navigation.navigate("PostComments", { album });
  }
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