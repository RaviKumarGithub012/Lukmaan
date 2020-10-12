import React from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyle } from '../assets/styles/global-style';
import { VideoData } from './videos-data';
import CardBox from '../components/card-box';
import ScreenHeader from '../components/header';
import ThemeCarousel from '../components/theme-carousel';
import ShareWithFriends from '../components/share';
import TeacherProfile from '../components/teacher-profile';

const data = [
  { id: 1, name: 'Jacinta Sabah', rating: 4.5, teacherPic: require('../static/teacher-pic.png') },
  { id: 2, name: 'Jacinta Sabah', rating: 4.5, teacherPic: require('../static/teacher-pic.png') },
  { id: 3, name: 'Jacinta Sabah', rating: 4.5, teacherPic: require('../static/teacher-pic.png') },
  { id: 4, name: 'Jacinta Sabah', rating: 4.5, teacherPic: require('../static/teacher-pic.png') },
  { id: 5, name: 'Jacinta Sabah', rating: 4.5, teacherPic: require('../static/teacher-pic.png') },
  { id: 6, name: 'Jacinta Sabah', rating: 4.5, teacherPic: require('../static/teacher-pic.png') },
]

const Coaches = () => {
  return (
    <View style={[globalStyle.wrapper, { paddingBottom: 5 }]}>
      <ScreenHeader headerNav={true} pageTitle="Physics Coaches" goBackButton={true} />
      <View style={{ marginTop: 50, flex: 1, marginLeft: 20 }}>
        <ScrollView>
          <ThemeCarousel title="Latest Videos" data={VideoData} item={3} Layout={CardBox} />
          <ThemeCarousel title="Viwed Videos" data={VideoData} item={3} Layout={CardBox} />
          <ThemeCarousel title="Teachers" data={data} item={4} Layout={TeacherProfile} />
          <ShareWithFriends />
        </ScrollView>
      </View>
    </View>
  );
}

export default Coaches;