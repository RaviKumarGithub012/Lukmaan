import React from 'react';
import { View, ScrollView } from 'react-native';
import ScreenHeader from '../components/header';
import { globalStyle } from '../assets/styles/global-style';
import Notif from '../components/notif';

const Notification = () => {
  return (
    <View style={globalStyle.wrapper}>
      <ScreenHeader headerNav={true} goBackButton={true} pageTitle="Notifications" />
      <View style={{ flex: 1, marginTop: 50 }}>
        <ScrollView>
          <Notif isActive={true} />
          <Notif />
          <Notif />
          <Notif />
          <Notif />
          <Notif />
          <Notif />
          <Notif />
        </ScrollView>
      </View>
    </View>
  )
}


export default Notification;