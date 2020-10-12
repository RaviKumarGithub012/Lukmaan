import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import themeColors from '../assets/styles/theme-style.json';
import { globalStyle } from '../assets/styles/global-style';
import ScreenHeader from '../components/header';
import Button from 'react-native-button';
import BookCourse from '../components/book-course';
import { teacherProfileV, teacherReview, singleCoaches } from '../assets/images/imageData';

const SingleCoaches = () => {

  const [isAbout, setIsAbout] = useState(false);

  return (
    <View style={[globalStyle.wrapper, { paddingBottom: 5 }]}>
      <ScreenHeader headerNav={true} pageTitle="Physics-Class X" goBackButton={true} />
      <View style={{ paddingHorizontal: 20, marginTop: 10, flex: 1 }}>
        <ScrollView>
          <View style={styles.teacherReview}>
            <View style={{ width: '45%' }}>
              <Image style={globalStyle.imgFluid} source={teacherProfileV} />
            </View>
            <View style={{ width: '50%', paddingRight: 20, alignItems: 'center' }}>
              <Image style={[globalStyle.imgFluid, styles.teacherPic]} source={singleCoaches} />
              <Text style={styles.heading}>David <Text style={styles.subHeading}>Williams</Text></Text>
              <Text style={styles.heading}>Certified Physics <Text style={styles.subHeading}>Coach</Text></Text>
              <Image style={globalStyle.imgFluid} source={teacherReview} />
            </View>
          </View>
          <View style={styles.tabs}>
            <Button style={[globalStyle.tabBtn, isAbout ? globalStyle.activeTab : globalStyle.inActiveTab]} onPress={() => setIsAbout(true)}>ABOUT</Button>
            <Button style={[globalStyle.tabBtn, { marginBottom: 10 }, isAbout ? globalStyle.inActiveTab : globalStyle.activeTab]} onPress={() => setIsAbout(false)}>SESSIONS</Button>
          </View>
          <View>
            {
              isAbout ?
                <View style={{ paddingHorizontal: 10 }}>
                  <Text style={styles.aboutTxt}>
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum
                    has been the industry’s standard dummy text
                    ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make
                    a type specimen.
                </Text>
                  <Text style={styles.aboutTxt}>
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum
                    has been the industry’s standard dummy text
                    ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make
                    a type specimen.
                </Text>
                </View>
                :
                <View style={{ paddingHorizontal: 10 }}>
                  <BookCourse isbutton={true} session="Per Session" title="Physics - Class X" days="Mon, Wed, Fri" time="17:30 - 18:30" price="$ 500" />
                  <BookCourse isbutton={true} session="Per Session" title="Physics - Class X" days="Mon, Wed, Fri" time="17:30 - 18:30" price="$ 500" />
                  <BookCourse isbutton={true} session="Per Session" title="Physics - Class X" days="Mon, Wed, Fri" time="17:30 - 18:30" price="$ 500" />
                  <BookCourse isbutton={true} session="Per Session" title="Physics - Class X" days="Mon, Wed, Fri" time="17:30 - 18:30" price="$ 500" />
                  <BookCourse isbutton={true} session="Per Session" title="Physics - Class X" days="Mon, Wed, Fri" time="17:30 - 18:30" price="$ 500" />
                  <BookCourse isbutton={true} session="Per Session" title="Physics - Class X" days="Mon, Wed, Fri" time="17:30 - 18:30" price="$ 500" />
                </View>
            }
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  teacherPic: {
    maxWidth: 100,
    maxHeight: 100,
    borderRadius: 100 / 2
  },
  teacherReview: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: themeColors.text_color_2,
    textAlign: 'center'
  },
  subHeading: {
    fontWeight: '400',
    opacity: 0.5
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  aboutTxt: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20
  }
});

export default SingleCoaches;