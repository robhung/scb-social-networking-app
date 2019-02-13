import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import AlbumPhotosScreenContainer from "../../containers/AlbumPhotosScreenContainer";

import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import PhotoModal from "../../components/PhotoModal";
import PhotoThumb from "../../components/PhotoThumb";

const AlbumPhotosScreen = ({
  columns,
  onFetch,
  onIncrementIndex,
  onPhotoThumb,
  onToggleModal,
  state
}) => (
  <View style={styles.wrapper}>
    {(() => {
      if (state.loading) return <Loading flex={1} />;
      if (state.error)
        return (
          <View style={styles.errorWrapper}>
            <ErrorMessage textStyle={styles.errorText} text={state.error} />
            <Button onPress={onFetch} title="Refetch" />
          </View>
        );

      return (
        <React.Fragment>
          <PhotoModal
            index={state.index}
            onIncrementIndex={onIncrementIndex}
            onToggleModal={onToggleModal}
            photos={state.photos}
            showModal={state.showModal}
          />
          <FlatList
            style={styles.photosWrapper}
            contentContainerStyle={styles.photosContent}
            data={state.photos}
            numColumns={columns}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => `${item.id}`}
            onRefresh={() => onFetch()}
            refreshing={state.loading}
            renderItem={({ item, index }) => (
              <PhotoThumb
                columns={columns}
                photo={item}
                onPhotoThumb={() => onPhotoThumb(index)}
              />
            )}
          />
        </React.Fragment>
      );
    })()}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  photosWrapper: {},
  photosContent: {},
  errorWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  errorText: {
    fontSize: 18
  }
});

AlbumPhotosScreen.propTypes = {
  columns: PropTypes.number.isRequired,
  onFetch: PropTypes.func.isRequired,
  onIncrementIndex: PropTypes.func.isRequired,
  onPhotoThumb: PropTypes.func.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  state: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    index: PropTypes.number,
    photos: PropTypes.array,
    showModal: PropTypes.bool
  }).isRequired
};

export default AlbumPhotosScreenContainer(AlbumPhotosScreen);
