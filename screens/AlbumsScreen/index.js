import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import AlbumsScreenContainer from "../../containers/AlbumsScreenContainer";

import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import Album from "../../components/Album";

const AlbumsScreen = ({ onFetch, onAlbum, state }) => (
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
          style={styles.albumsWrapper}
          contentContainerStyle={styles.albumsContent}
          numColumns={2}
          data={state.albums}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          onRefresh={() => onFetch()}
          refreshing={state.loading}
          renderItem={({ item }) => <Album album={item} onAlbum={onAlbum} />}
        />
      );
    })()}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  albumsWrapper: {},
  albumsContent: {
    alignItems: "center",
    paddingVertical: 12
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

export default AlbumsScreenContainer(AlbumsScreen);
