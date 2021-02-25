import React, { useState, useEffect, createRef, Fragment } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  BackHandler,
  StatusBar,
  FlatList,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import VideoToLeft from "../../components/video-to-left";
import themeColors from "../../assets/styles/theme-style.json";
import * as ScreenOrientation from "expo-screen-orientation";
import VideoPlayer from "expo-video-player";
import { Video } from "expo-av";
import { globalStyle } from "../../assets/styles/global-style";
import Preloader from "../../components/preloader/preloader";
import { backward, forward, playIcon } from "../../assets/images/imageData";
import { Picker } from "@react-native-community/picker";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const SingleVideo = ({ navigation, route, latestVideos, videosData }) => {
  const [fullScreen, setFullScreen] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isPreloader, setIsPreloader] = useState(false);
  const [vWidth, setVWidth] = useState(width);
  const [vHeight, setvHeight] = useState(height);
  const [videoList, setVideoList] = useState([]);
  const [rate, setRate] = useState(1.0);
  const [isVideoDtl, setIsVideoDtl] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const [videoDtl, setVideoDtl] = useState({
    title: "",
    dis: "",
    quiz_id: "",
  });

  let videoRef = createRef();

  useEffect(() => {
    if (route?.params?.videoPath) {
      setVideoId(route.params.videoPath);
      setVideoDtl({
        ...videoDtl,
        quiz_id: route.params?.videoData?.quiz_id,
        title: route.params?.videoData?.title,
        dis: route.params?.videoData?.dis,
      });
    }
  }, [route]);

  useEffect(() => {
    if (videoDtl?.quiz_id !== null && videosData) {
      const filterData = videosData?.payload.filter(
        (item) => item.lecture_quiz_id !== videoDtl?.quiz_id
      );
      setVideoList(filterData);
    }
  }, [videoDtl, videosData]);

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
    (async () => {
      await latestVideos();
    })();
    navigation.addListener("focus", () => {
      BackHandler.addEventListener("hardwareBackPress", () =>
        setFullScreen(false)
      );
    });
    return navigation.addListener("blur", () => {
      setFullScreen(false);
    });
  }, []);

  const handleVideoId = (info) => {
    if (info !== undefined && info !== null) {
      setVideoId(info.urlId);
      const { title, dis, quiz_id } = info.data;
      setVideoDtl({ ...videoDtl, quiz_id: quiz_id, title: title, dis: dis });
      setIsVideoDtl({ quiz_id: quiz_id, title: title, dis: dis });
      setIsPreloader(true);
      setTimeout(() => {
        setIsPreloader(false);
      }, 2000);
    } else {
      Alert.alert("This video is not available!");
    }
  };

  const renderVideo = ({ item }) => {
    return (
      <VideoToLeft
        key={item.course_id}
        title={item.video_title}
        description={item.description}
        video_type={item.video_type}
        course_id={item.course_id}
        handleVideoId={handleVideoId}
        quiz_id={item.lecture_quiz_id}
      />
    );
  };

  const handleVideoRef = (component) => {
    videoRef = component;
  };

  const handleBackward = async () => {
    const getCurrentStatus = await videoRef.getStatusAsync();
    videoRef.setPositionAsync(Number(getCurrentStatus?.positionMillis) - 10000);
    videoRef.playAsync();
  };
  const handleForward = async () => {
    const getCurrentStatus = await videoRef.getStatusAsync();
    videoRef.setPositionAsync(Number(getCurrentStatus?.positionMillis) + 10000);
    videoRef.playAsync();
  };

  const handlePlaybackSpeed = async (itemValue) => {
    setRate(itemValue);
    videoRef.setRateAsync(itemValue, true, true);
  };

  useEffect(() => {
    if (isTouched && isTouched !== undefined && isTouched !== null) {
      setTimeout(() => {
        setIsTouched(false);
      }, 5000);
    }
  }, [isTouched]);
  const playIcon = () => () => (
    <View
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        height: 60,
        width: 60,
        backgroundColor: themeColors.white,
        borderRadius: 30,
        padding: 16,
      }}
    >
      <AntDesign name="caretright" size={26} color="black" />
    </View>
  );
  const pauseIcon = () => () => (
    <View
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        height: 60,
        width: 60,
        backgroundColor: themeColors.white,
        borderRadius: 30,
        padding: 16,
      }}
    >
      <FontAwesome name="pause" size={26} color="black" />
    </View>
  );

  return (
    <View style={[globalStyle.wrapper, styles.videoWrapper]}>
      <View
        style={{
          position: "relative",
          paddingTop: 0,
          zIndex: 0,
        }}
        onTouchStart={() => setIsTouched(true)}
      >
        {videoId !== null && (
          <VideoPlayer
            videoProps={{
              shouldPlay: false,
              resizeMode: Video.RESIZE_MODE_COVER,
              source: { uri: `${videosData?.video_path}${videoId}` },
              isMuted: false,
              volume: 1,
              videoRef: handleVideoRef,
              style: {
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
              },
            }}
            textStyle={{
              color: themeColors.white,
              fontSize: 14,
              backgroundColor: "#000",
            }}
            inFullscreen={fullScreen}
            switchToLandscape={() => setFullScreen(true)}
            switchToPortrait={() => setFullScreen(false)}
            width={vWidth}
            height={fullScreen ? vHeight - StatusBar.currentHeight + 5 : 250}
            sliderColor={themeColors.white}
            playIcon={playIcon()}
            pauseIcon={pauseIcon()}
          />
        )}
        {isTouched ? (
          <Fragment>
            <View style={styles.playbackSpeed}>
              <Picker
                style={{ width: 100, height: 30 }}
                selectedValue={rate}
                onValueChange={(itemValue) => handlePlaybackSpeed(itemValue)}
              >
                <Picker.Item label="1x" value={1.0} />
                <Picker.Item label="2x" value={2.0} />
                <Picker.Item label="3x" value={5.0} />
              </Picker>
            </View>
            <TouchableOpacity
              style={[styles.rateIcon, { left: "25%" }]}
              onPress={handleBackward}
            >
              <Image source={backward} style={styles.rateIconImage} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.rateIcon, { right: "25%" }]}
              onPress={handleForward}
            >
              <Image source={forward} style={styles.rateIconImage} />
            </TouchableOpacity>
          </Fragment>
        ) : null}
      </View>
      <View style={styles.textDtl}>
        <Text numberOfLines={1} style={styles.videoTitle}>
          {videoDtl.title ? videoDtl.title : ""}
        </Text>
        <Text numberOfLines={2} style={styles.videoDic}>
          {videoDtl.dis ? videoDtl.dis : ""}
        </Text>
      </View>
      <View style={styles.relatedVideos}>
        <View style={styles.moreVideos}>
          {videoList && (
            <FlatList
              data={videoList}
              renderItem={renderVideo}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      </View>
      {isPreloader ? <Preloader /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: 300,
    height: 300,
  },
  playbackSpeed: {
    position: "absolute",
    top: 20,
    left: "45%",
    backgroundColor: "rgba(255,255,255,1)",
    zIndex: 1,
    width: 30,
    overflow: "hidden",
  },
  rateIcon: {
    position: "absolute",
    top: "40%",
    zIndex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    padding: 10,
    borderRadius: 30,
  },
  rateIconImage: {
    resizeMode: "stretch",
    height: 35,
    width: 30,
  },
  videoWrapper: {
    backgroundColor: themeColors.gray_color,
    position: "relative",
  },
  videoIcon: {
    height: 50,
    width: 50,
  },
  moreVideos: {
    marginTop: 0,
    paddingHorizontal: 10,
  },
  textDtl: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 5,
    backgroundColor: themeColors.white,
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
