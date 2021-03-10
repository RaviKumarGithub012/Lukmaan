import React, { useEffect, useState } from "react";
import { View, ScrollView, Share } from "react-native";
import { globalStyle } from "../../../../assets/styles/global-style";
import { VideoData } from "../../../videos-data";
import CardBox from "../../../../components/card-box";
import ScreenHeader from "../../../../components/header";
import ThemeCarousel from "../../../../components/theme-carousel";
import Subjects from "../../../../components/subjects";
import ShareWithFriends from "../../../../components/share";
import {
  ecology,
  biology,
  art,
  geography,
} from "../../../../assets/images/imageData";
import { videoPath } from "../../../../contexts/videoPath/videoPath";
import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [
  { id: 1, icon: ecology },
  { id: 2, icon: biology },
  { id: 3, icon: geography },
  { id: 4, icon: art },
  { id: 5, icon: geography },
  { id: 6, icon: art },
];

const Dashboard = ({ videosData, latestVideos }) => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const name = await AsyncStorage.getItem("loginDetails");
        if (JSON.parse(name)) {
          setUserName(JSON.parse(name));
        }
        await latestVideos();
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <videoPath.Provider value={{ video_path: videosData?.video_path }}>
      <View style={[globalStyle.wrapper, { paddingBottom: 5 }]}>
        <ScreenHeader
          headerNav={true}
          isStudent={true}
          leftNotif={true}
          pageTitle={userName?.first_name ? userName?.first_name : "guest user"}
          rightCart={true}
        />
        <View style={{ marginTop: 50, flex: 1, marginLeft: 20 }}>
          <ScrollView>
            <ThemeCarousel
              title="Latest Videos"
              data={videosData?.payload ? videosData.payload : VideoData}
              item={3}
              Layout={CardBox}
            />
            {/* <ThemeCarousel title="Viwed Videos" data={VideoData} item={3} Layout={CardBox} /> */}
            <ThemeCarousel
              title="Based on Your Preference"
              data={data}
              item={4}
              Layout={Subjects}
            />
            <ShareWithFriends onShare={onShare} />
          </ScrollView>
        </View>
      </View>
    </videoPath.Provider>
  );
};

export default Dashboard;
