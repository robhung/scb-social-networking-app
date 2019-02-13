import React from "react";
import {
  Image,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Icon } from "expo";
import PropTypes from "prop-types";

import { widthPercentageToDP as wp } from "../../constants/Layout";
import Colors from "../../constants/Colors";

const PhotoModal = ({
  index,
  onToggleModal,
  onIncrementIndex,
  photos,
  showModal
}) => (
  <Modal visible={showModal} animationType="fade">
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.scrollView}
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
            index === 0 ? [styles.backIndex, styles.disabled] : styles.backIndex
          }
          onPress={() => onIncrementIndex(-1)}
          disabled={index === 0}
        >
          <Icon.Ionicons
            name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
            size={30}
            color={Colors.WHITE}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={
            index === photos.length - 1
              ? [styles.forwardIndex, styles.disabled]
              : styles.forwardIndex
          }
          onPress={() => onIncrementIndex(1)}
          disabled={index === photos.length - 1}
        >
          <Icon.Ionicons
            name={
              Platform.OS === "ios" ? "ios-arrow-forward" : "md-arrow-forward"
            }
            size={30}
            color={Colors.WHITE}
          />
        </TouchableOpacity>
        <Image style={styles.image} source={{ uri: photos[index].url }} />
        <Text style={styles.title}>{photos[index].title}</Text>
      </ScrollView>
    </SafeAreaView>
  </Modal>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000"
  },
  scrollView: {
    flex: 1,
    justifyContent: "center"
  },
  closeModal: {
    position: "absolute",
    top: 0,
    left: 4,
    paddingHorizontal: 16
  },
  backIndex: {
    position: "absolute",
    top: -3,
    right: 60,
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  forwardIndex: {
    position: "absolute",
    top: -3,
    right: 12,
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  disabled: {
    opacity: 0.2
  },
  image: {
    height: wp(100),
    width: wp(100)
  },
  title: {
    color: Colors.WHITE,
    position: "absolute",
    bottom: 24,
    paddingHorizontal: 12,
    paddingBottom: 32
  }
});

PhotoModal.propTypes = {
  index: PropTypes.number.isRequired,
  onIncrementIndex: PropTypes.func.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(PropTypes.object),
  showModal: PropTypes.bool.isRequired
};

export default PhotoModal;
