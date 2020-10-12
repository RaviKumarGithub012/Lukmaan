import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import { globalStyle } from "../assets/styles/global-style";
import { useNavigation } from "@react-navigation/native";
import { videoThum } from "../assets/images/imageData";

const CardBox = ({
  title,
  description,
  video_title,
  video_type,
  course_id,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("singleVideo", {
          videoPath: `${course_id}/${video_title}.${video_type}`,
          videoDtl: { title: video_title, dis: description },
        })
      }
    >
      <View style={{ marginRight: 15, marginBottom: 20 }}>
        <Text numberOfLines={1} style={globalStyle.videoTitle}>
          {title}
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
