import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import themeColors from '../assets/styles/theme-style.json';
import { videoThum } from '../assets/images/imageData';


const VideoToLeft = () => {
  return (
    <View style={styles.box}>
      <View style={{ width: '30%' }}>
        <Image style={styles.feedBackImg} source={videoThum} />
      </View>
      <View style={{ width: '70%', paddingHorizontal: 15 }}>
        <Text style={styles.heading} numberOfLines={1}>Lorem ipsum text ipsum text ipssum asfasf asf asf as fas</Text>
        <Text style={styles.dtl} numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</Text>
      </View>
    </View>
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
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: themeColors.border_color,
    paddingBottom: 15
  }
});

export default VideoToLeft;