import React from 'react'
import { View, ScrollView } from 'react-native'
import { globalStyle } from '../../../assets/styles/global-style';
import ScreenHeader from '../../../components/header';
import BookCourse from '../../../components/book-course';


const Courses = () => {
  return (
    <View style={globalStyle.wrapper}>
      <ScreenHeader headerNav={true} goBackButton={true} pageTitle="My Courses" />
      <View style={{ flex: 1, marginTop: 30 }}>
        <ScrollView>
          <View style={{ paddingHorizontal: 20 }}>
            <BookCourse title="Mathematics - Class XI" days="Mon, Wed, Fri" time="17:30 - 18:30" student="1 Student" locationAt="At Home" />
            <BookCourse title="Mathematics - Class XI" days="Mon, Wed, Fri" time="17:30 - 18:30" student="1 Student" locationAt="At Home" />
            <BookCourse title="Mathematics - Class XI" days="Mon, Wed, Fri" time="17:30 - 18:30" student="1 Student" locationAt="At Home" />
            <BookCourse title="Mathematics - Class XI" days="Mon, Wed, Fri" time="17:30 - 18:30" student="1 Student" locationAt="At Home" />
            <BookCourse title="Mathematics - Class XI" days="Mon, Wed, Fri" time="17:30 - 18:30" student="1 Student" locationAt="At Home" />
            <BookCourse title="Mathematics - Class XI" days="Mon, Wed, Fri" time="17:30 - 18:30" student="1 Student" locationAt="At Home" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Courses;