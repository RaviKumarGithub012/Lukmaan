import React from 'react';
import { View } from 'react-native';
import { globalStyle } from '../../../assets/styles/global-style';
import ScreenHeader from '../../../components/header';



const Booking = () => {
  return (
    <View style={globalStyle.wrapper}>
      <ScreenHeader
        pageTitle="Booking"
        goBackButton={true}
      />

    </View>
  );
}

export default Booking;