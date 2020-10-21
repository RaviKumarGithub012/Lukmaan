import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import { globalStyle } from "../assets/styles/global-style";
import { useNavigation } from "@react-navigation/native";
import { videoThum } from "../assets/images/imageData";

const CardBox = ({
  description,
  video_title,
  video_type,
  course_id,
  lecture_quiz_id
}) => {
  const navigation = useNavigation();
  const handleVideo = () => {
    let videoBasePath = `${course_id}/${video_title}.${video_type}`;
    let videoData = { title: video_title, dis: description, quiz_id: lecture_quiz_id, id:course_id };
    navigation.navigate("singleVideo", {videoPath: videoBasePath,videoData: videoData,});
  }
  return (
    <TouchableWithoutFeedback onPress={handleVideo} key={course_id}>
      <View style={{ marginRight: 15, marginBottom: 20 }}>
        <Text numberOfLines={1} style={globalStyle.videoTitle}>
          {video_title}
        </Text>
        {videoThum && (
          <Image
            source={videoThum}
            resizeMode="cover"
            style={{ width: "100%" }}
            accessibilityLabel="thumbnail"
          />
        )}
        <Text numberOfLines={3} style={{ fontSize: 14 }}>
          {description}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardBox;
