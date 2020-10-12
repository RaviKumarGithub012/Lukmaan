import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  BackHandler,
  StatusBar,
} from "react-native";
import VideoToLeft from "../components/video-to-left";
import { globalStyle } from "../assets/styles/global-style";
import themeColors from "../assets/styles/theme-style.json";
import * as ScreenOrientation from "expo-screen-orientation";
import VideoPlayer from "expo-video-player";
import { Video } from "expo-av";

const { width, height } = Dimensions.get("window");

const SingleVideo = ({ navigation, route }) => {
  const [fullScreen, setFullScreen] = useState(false);
  const [vWidth, setVWidth] = useState(width);
  const [vHeight, setvHeight] = useState(height);

  useEffect(() => {
    (async () => {
      if (fullScreen === true) {
        setTimeout(async () => {
          await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.LANDSCAPE
          );
        });
        setTimeout(() => {
          setVWidth(Dimensions.get("window").width);
          setvHeight(Dimensions.get("window").height);
        }, 800);
      } else {
        setTimeout(async () => {
          await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT
          );
        });
        setTimeout(() => {
          setVWidth(width);
          setvHeight(250);
        }, 800);
      }
    })();
  }, [fullScreen]);

  useEffect(() => {
    navigation.addListener("focus", () => {
      BackHandler.addEventListener("hardwareBackPress", () =>
        setFullScreen(false)
      );
    });
    return navigation.addListener("blur", () => {
      setFullScreen(false);
    });
  }, []);

  return (
    <View style={globalStyle.wrapper}>
      <View
        style={{
          position: "relative",
          paddingTop: 0,
          zIndex: 0,
        }}
      >
        <VideoPlayer
          videoProps={{
            shouldPlay: false,
            resizeMode: Video.RESIZE_MODE_COVER,
            source: {
              uri: `http://15.207.23.184/storage/app/public/course/${route.params.videoPath}`,
            },
            isMuted: false,
            rate: 1,
            volume: 1,
            style: {
              position: "absolute",
              left: 0,
              top: 0,
              right: 0,
            },
          }}
          inFullscreen={fullScreen}
          switchToLandscape={() => setFullScreen(true)}
          switchToPortrait={() => setFullScreen(false)}
          width={vWidth}
          height={fullScreen ? vHeight - StatusBar.currentHeight + 5 : 250}
        />
      </View>
      <View style={styles.textDtl}>
        <Text numberOfLines={1} style={styles.videoTitle}>
          {route.params.videoDtl.title}
        </Text>
        <Text numberOfLines={2} style={styles.videoDic}>
          {route?.params?.videoDtl?.dis ? route.params.videoDtl.dis : ""}
        </Text>
      </View>
      <View style={styles.relatedVideos}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
          <View style={styles.moreVideos}>
            <VideoToLeft />
          </View>
          <View style={styles.moreVideos}>
            <VideoToLeft />
          </View>
          <View style={styles.moreVideos}>
            <VideoToLeft />
          </View>
          <View style={styles.moreVideos}>
            <VideoToLeft />
          </View>
          <View style={styles.moreVideos}>
            <VideoToLeft />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoIcon: {
    height: 50,
    width: 50,
  },
  moreVideos: {
    marginTop: 10,
  },
  textDtl: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 5,
  },
  relatedVideos: {
    flex: 1,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: themeColors.text_color_2,
  },
  backgroundVideo: {
    height: width / 2 + 30,
    width: width,
    top: -1,
  },
});

export default SingleVideo;
