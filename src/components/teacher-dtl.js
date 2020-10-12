import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import themeColors from '../assets/styles/theme-style.json';
import { teacherProfileV, singleCoaches } from '../assets/images/imageData';


const TeacherDtl = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={teacherProfileV} />
        <Image style={styles.img} source={singleCoaches} />
      </View>
      <View style={styles.wrapperRow}>
        <View>
          <Text style={styles.heading}>Public Administration</Text>
          <Text style={styles.subHeading}>By David Williams</Text>
          <Text style={styles.txt}>Mon, Wed, Fri</Text>
          <Text style={styles.txt}>17:30 - 18:30</Text>
          <Text style={styles.txt}>Starting from Dec 23rd 2019</Text>
        </View>
        <View>
          <Text style={[styles.heading, { marginBottom: -3 }]}>$75000</Text>
          <Text style={styles.txt}>5 session</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowRadius: 3.84,
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 3
  },
  wrapperRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  imgWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    resizeMode: 'contain',
    width: '100%',
    maxWidth: 100,
    maxHeight: 100
  },
  heading: {
    color: themeColors.text_color_2,
    fontWeight: '700',
    fontSize: 17
  },
  subHeading: {
    fontSize: 17,
    color: themeColors.grayColor,
    marginVertical: 3
  },
  txt: {
    color: themeColors.grayColor
  }
});

export default TeacherDtl;