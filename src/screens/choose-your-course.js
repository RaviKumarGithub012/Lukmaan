import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Button from 'react-native-button';
import themeColors from '../assets/styles/theme-style.json';
import ScreenHeader from '../components/header';
import { globalStyle } from '../assets/styles/global-style';
import { useDispatch, useSelector } from 'react-redux';
import { chooseCourse } from '../services/redux/choose-course/action';

const ChooseCourse = ({ navigation }) => {

  const courseList = useDispatch();
  const store = useSelector(state => state.coursesReducer);

  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    courseList(chooseCourse());
  }, []);

  useEffect(() => {
    const { courses } = store;
    if (courses.length) {
      setCourseData(courses);
    }
  }, [store.courses]);

  const toRegistration = id => {
    navigation.navigate('register', {
      courseId: id
    });
  }

  return (
    <SafeAreaView style={globalStyle.wrapper}>
      <ScreenHeader pageTitle="Choose Your Course" />
      <ScrollView>
        <View style={styles.bodyWrapper}>
          <Text style={[themeColors.pageTitle, styles.bodyTitle]}>GS FOUNDATION 2020</Text>
          {
            courseData.length > 0 && courseData.map(item => {
              return <View key={item.id} style={styles.titleRow}>
                <Button onPress={() => toRegistration(item.id)} style={styles.courseBtn}>{item.course_title}</Button>
              </View>
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  bodyTitle: {
    marginTop: 15,
    marginBottom: 5,
    paddingBottom: 0,
    textAlign: 'left'
  },
  bodyWrapper: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 15
  },
  courseBtn: {
    shadowColor: "#ddd",
    shadowOpacity: 0.5,
    shadowRadius: 2.62,
    elevation: 5,
    paddingHorizontal: 21,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 40,
    margin: 5,
    marginTop: 18,
    color: themeColors.text_color_2,
  }
});

export default ChooseCourse;