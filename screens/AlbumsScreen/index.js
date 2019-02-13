import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import AlbumsScreenContainer from "../../containers/AlbumsScreenContainer";

import Album from "../../components/Album";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";

const AlbumsScreen = ({ columns, onFetch, onAlbum, state }) => (
  <View style={styles.wrapper}>
    {(() => {
      if (state.loading) return <Loading flex={1} />;
      if (state.error)
        return (
          <View style={styles.errorWrapper}>
            <ErrorMessage text={state.error} />
            <Button onPress={onFetch} title="Refetch" />
          </View>
        );

      return (
        <FlatList
          style={styles.albumsWrapper}
          contentContainerStyle={styles.albumsContent}
          numColumns={columns}
          data={state.albums}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          onRefresh={() => onFetch()}
          refreshing={state.loading}
          renderItem={({ item }) => (
            <Album album={item} columns={columns} onAlbum={onAlbum} />
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
  albumsWrapper: {},
  albumsContent: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 8,
    paddingBottom: 16
  },
  errorWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

AlbumsScreen.propTypes = {
  columns: PropTypes.number.isRequired,
  onAlbum: PropTypes.func.isRequired,
  onFetch: PropTypes.func.isRequired,
  state: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    albums: PropTypes.array
  }).isRequired
};

export default AlbumsScreenContainer(AlbumsScreen);
