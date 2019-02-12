import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import AlbumPhotosScreenContainer from "../../containers/AlbumPhotosScreenContainer";

import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import Photo from "../../components/Photo";

const AlbumPhotosScreen = ({ columns, onFetch, onPhoto, state, wp }) => (
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
            <Photo columns={columns} photo={item} onPhoto={onPhoto} />
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
  photosContent: {
    // flexDirection: "column"
    // alignItems: "center",
    // paddingVertical: 12
  },
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
