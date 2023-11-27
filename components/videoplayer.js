import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Video } from "expo-av";
import { Dimensions } from "react-native";
import { ButtonsComponent } from "./buttons";
let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export function VideoPlayer({ urlData }) {
  const [status, setStatus] = useState({});

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: urlData.link }}
        style={styles.videoscreen}
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        // useNativeControls
        shouldPlay={false}
        useNativeControls={true}
        shouldCorrectPitch
      />
      <ButtonsComponent urlData={urlData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoscreen: {
    width: deviceWidth,
    height: deviceHeight,
  },
});
