import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import themeColors from '../assets/styles/theme-style.json';
import { start } from '../assets/images/imageData';


const TeacherProfile = ({ teacherPic, name, rating }) => {
  return (
    <View style={styles.teacherWrapper}>
      {teacherPic && <Image style={styles.profileImg} source={teacherPic} />}
      {name && <Text style={styles.name}>{name}</Text>}
      <View style={styles.ratingWrapper}>
        {rating && <Text style={styles.rate}>{rating} </Text>}
        <Image style={{ width: 20, resizeMode: 'contain' }} source={start} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  teacherWrapper: {
    marginRight: 15,
    justifyContent: 'center',
    marginVertical: 20
  },
  profileImg: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
    borderRadius: 80 / 2
  },
  name: {
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 5,
    color: themeColors.text_color_2
  },
  ratingWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rate: {
    fontWeight: '700',
    fontSize: 18
  }
});

export default TeacherProfile;