import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { globalStyle } from '../assets/styles/global-style';
import ScreenHeader from '../components/header';
import { VideoData } from '../screens/videos-data';
import CardBox from '../components/card-box';
import ThemeCarousel from '../components/theme-carousel';
import ShareWithFriends from '../components/share';

const MyFavourite = () => {
  return (
    <View style={globalStyle.wrapper}>
      <ScreenHeader headerNav={true} goBackButton={true} pageTitle="My Favourite" />
      <View style={{ marginTop: 50, flex: 1, marginLeft: 20 }}>
        <ScrollView>
          <ThemeCarousel title="Latest Videos" data={VideoData} item={3} Layout={CardBox} />
          <ThemeCarousel title="Viwed Videos" data={VideoData} item={3} Layout={CardBox} />
          <ShareWithFriends />
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({});

export default MyFavourite