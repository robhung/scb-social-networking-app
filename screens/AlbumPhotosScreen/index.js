import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import AlbumPhotosScreenContainer from "../../containers/AlbumPhotosScreenContainer";

import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import PhotoThumb from "../../components/PhotoThumb";

const AlbumPhotosScreen = ({ columns, onFetch, onPhotoThumb, state, wp }) => (
  <View style={styles.wrapper}>
    {(() => {
      if (state.loading) return <Loading flex={1} />;
      if (state.error)
        return (
          <View style={styles.errorWrapper}>
            <ErrorMessage
              textStyle={styles.errorText}
              text="Unable to retrieve Albums, please refetch."
            />
            <Button onPress={onFetch} title="Refetch" color="#000" />
          </View>
        );

      return (
        <FlatList
          style={styles.photosWrapper}
          contentContainerStyle={styles.photosContent}
          data={state.photos}
          numColumns={columns}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          onRefresh={() => onFetch()}
          refreshing={state.loading}
          renderItem={({ item }) => (
            <PhotoThumb
              columns={columns}
              photo={item}
              onPhotoThumb={onPhotoThumb}
            />
          )}
        />
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

export default AlbumPhotosScreenContainer(AlbumPhotosScreen);
