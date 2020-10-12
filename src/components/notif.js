import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import themeColors from '../assets/styles/theme-style.json';
import { student } from '../assets/images/imageData';


const Notif = ({ isActive }) => {
  return (
    <View style={[styles.notifWrapper, isActive ? { backgroundColor: 'rgba(108,176,29,0.056)' } : null]}>
      <View>
        <Image style={styles.imgIcon} source={student} />
      </View>
      <View style={{ paddingHorizontal: 10, width: '75%' }}>
        <Text style={styles.heading}>Dimple has booked Mathematics - Class X for 5 Sessions</Text>
        <Text style={styles.subHeading}>9 hrs</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  imgIcon: {
    resizeMode: 'contain',
    height: 90,
    width: 90,
    borderRadius: 80 / 2
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: themeColors.text_color_2
  },
  subHeading: {
    color: themeColors.grayColor
  },
  notifWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
  },
});

export default Notif;