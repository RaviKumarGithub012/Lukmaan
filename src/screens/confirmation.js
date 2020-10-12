import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { globalStyle } from '../assets/styles/global-style';
import ScreenHeader from '../components/header';
import TeacherDtl from '../components/teacher-dtl';
import themeColors from '../assets/styles/theme-style.json';
import { confirmIcon } from '../assets/images/imageData';

const Confirmation = () => {
  return (
    <View style={globalStyle.wrapper}>
      <ScreenHeader headerNav={true} pageTitle="Confirmation" closeButton={true} />
      <View style={{ paddingHorizontal: 20, flex: 1 }}>
        <ScrollView>
          <View style={{ marginBottom: 15 }}>
            <Image style={styles.confirm_icon} source={confirmIcon} />
            <Text style={[styles.heading, styles.txt]}>Booking Complete!</Text>
            <Text style={styles.txt}>A confirmation email will be sent to your registered email.</Text>
            <Text style={[styles.heading, styles.txt]}>Your Booking No. #546877</Text>
          </View>
          <View style={{paddingBottom: 20}}>
            <TeacherDtl />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  confirm_icon: {
    resizeMode: 'contain',
    width: 50,
    marginTop: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  heading: {
    fontWeight: '700',
    fontSize: 16,
  },
  txt: {
    marginBottom: 10,
    color: themeColors.text_color_2,
    fontSize: 16,
    textAlign: 'center'
  }
});

export default Confirmation;