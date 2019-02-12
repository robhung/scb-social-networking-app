import React from "react";
import {
  Button,
  FlatList,
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { Icon } from "expo";
import PropTypes from "prop-types";

import AlbumPhotosScreenContainer from "../../containers/AlbumPhotosScreenContainer";

import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import PhotoThumb from "../../components/PhotoThumb";

import { widthPercentageToDP as wp } from "../../utils/responsive";

import Colors from "../../constants/Colors";

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
          <Modal visible={state.showModal} animationType="fade">
            <ScrollView
              bounces={false}
              contentContainerStyle={styles.modal}
              minimumZoomScale={1}
              maximumZoomScale={3}
              bouncesZoom={false}
              decelerationRate="normal"
            >
              <TouchableOpacity
                style={styles.closeModal}
                onPress={() => onToggleModal()}
              >
                <Icon.Ionicons
                  name={Platform.OS === "ios" ? "ios-close" : "md-close"}
                  size={48}
                  color={Colors.WHITE}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  state.index === 0
                    ? [styles.backIndex, styles.disabled]
                    : styles.backIndex
                }
                onPress={() => onIncrementIndex(-1)}
                disabled={state.index === 0}
              >
                <Icon.Ionicons
                  name={
                    Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"
                  }
                  size={30}
                  color={Colors.WHITE}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  state.index === state.photos.length - 1
                    ? [styles.forwardIndex, styles.disabled]
                    : styles.forwardIndex
                }
                onPress={() => onIncrementIndex(1)}
                disabled={state.index === state.photos.length - 1}
              >
                <Icon.Ionicons
                  name={
                    Platform.OS === "ios"
                      ? "ios-arrow-forward"
                      : "md-arrow-forward"
                  }
                  size={30}
                  color={Colors.WHITE}
                />
              </TouchableOpacity>
              <Image
                style={styles.image}
                source={{ uri: state.photos[state.index].url }}
              />
            </ScrollView>
          </Modal>
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
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000"
  },
  closeModal: {
    position: "absolute",
    top: 20,
    left: 20
  },
  backIndex: {
    position: "absolute",
    top: 28,
    right: 72
  },
  forwardIndex: {
    position: "absolute",
    top: 28,
    right: 32
  },
  disabled: {
    opacity: 0.2
  },
  image: {
    height: wp(100),
    width: wp(100)
  }
});

AlbumPhotosScreen.propTypes = {
  columns: PropTypes.number.isRequired,
  onFetch: PropTypes.func.isRequired,
  onPhotoThumb: PropTypes.func.isRequired,
  state: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    photos: PropTypes.array
  }).isRequired
};

export default AlbumPhotosScreenContainer(AlbumPhotosScreen);
