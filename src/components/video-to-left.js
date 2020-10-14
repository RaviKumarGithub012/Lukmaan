import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import themeColors from '../assets/styles/theme-style.json';
import { videoThum } from '../assets/images/imageData';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const VideoToLeft = ({title='title',quiz_id,course_id, handleVideoId, video_type, description='description'}) => {
  const handlePassVideoId = () => {
    let urlId = `${course_id}/${title}.${video_type}`;
    let data = { title: title, dis: description, id:course_id, quiz_id: quiz_id };
    handleVideoId({urlId: urlId, data: data});
  }
  return (
    <TouchableWithoutFeedback onPress={handlePassVideoId}>
    <View style={styles.box}>
      <View style={{ width: '30%' }}>
        <Image style={styles.feedBackImg} source={videoThum} />
      </View>
      <View style={{ width: '70%', paddingHorizontal: 15 }}>
        <Text style={styles.heading} numberOfLines={1}>{title}</Text>
        <Text style={styles.dtl} numberOfLines={2}>{description}</Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    color: themeColors.text_color_2,
    fontWeight: '600'
  },
  dtl: {
    color: themeColors.grayColor
  },
  feedBackImg: {
    resizeMode: 'contain',
    width: '100%',
    height: 50,
    marginTop: 10
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: themeColors.border_color,
    paddingBottom: 15,
    backgroundColor: themeColors.white,
    marginTop: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 2.62,
    elevation: 5,
    marginHorizontal: 5
  }
});

export default VideoToLeft;