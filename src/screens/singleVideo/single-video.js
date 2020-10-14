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
import VideoToLeft from "../../components/video-to-left";
import themeColors from "../../assets/styles/theme-style.json";
import * as ScreenOrientation from "expo-screen-orientation";
import VideoPlayer from "expo-video-player";
import { Video } from "expo-av";
import { globalStyle } from "../../assets/styles/global-style";

const { width, height } = Dimensions.get("window");

const SingleVideo = ({ navigation, route, latestVideos, videosData }) => {
  const [fullScreen, setFullScreen] = useState(false);
  const [vWidth, setVWidth] = useState(width);
  const [vHeight, setvHeight] = useState(height);
  const [videoList, setVideoList] = useState([]);
  const [videoId, setVideoId] = useState(null);
  const [videoDtl, setVideoDtl] = useState({
    title: '',
    dis: '',
    quiz_id: ""
  });

  useEffect(() => {
    if(route?.params?.videoPath){
      setVideoId(route.params.videoPath);
      setVideoDtl({
        ...videoDtl, 
        quiz_id: route.params?.videoData?.quiz_id, 
        title: route.params?.videoData?.title, 
        dis: route.params?.videoData?.dis
      });
    }
  }, [route]);

  useEffect(() => {
    if(videoDtl?.quiz_id !== null && videosData){
      const filterData = videosData?.payload.filter(item => item.lecture_quiz_id !== videoDtl?.quiz_id);
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

  const handleVideoId = info => {
    if(info){
      const {title, dis, quiz_id} = info.data;
      setVideoId(info.urlId);
      setVideoDtl({...videoDtl, quiz_id: quiz_id, title: title, dis: dis});
    }
  }

  return (
    <View style={[globalStyle.wrapper, styles.videoWrapper]}>
      <View
        style={{
          position: "relative",
          paddingTop: 0,
          zIndex: 0,
        }}
      >
        {
          videoId !== null &&  <VideoPlayer
          videoProps={{
            shouldPlay: false,
            resizeMode: Video.RESIZE_MODE_COVER,
            source: {
              uri: `http://15.207.23.184/storage/app/public/course/${videoId}`,
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
        }
       
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
        <ScrollView style={{ paddingHorizontal: 20 }}>
          <View style={styles.moreVideos}>
            {
              videoList && videoList.map(item => {
                return <VideoToLeft
                key={item.id}
                title={item.video_title}
                description={item.description} 
                video_type={item.video_type}
                course_id={item.course_id}
                handleVideoId={handleVideoId}
                quiz_id={item.lecture_quiz_id}
                />
              })
            }
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoWrapper: {
    backgroundColor: themeColors.gray_color
  },
  videoIcon: {
    height: 50,
    width: 50,
  },
  moreVideos: {
    marginTop: 0,
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
