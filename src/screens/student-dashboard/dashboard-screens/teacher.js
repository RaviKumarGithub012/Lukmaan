import React from 'react';
import { View } from 'react-native';
import { globalStyle } from '../../../assets/styles/global-style';
import ScreenHeader from '../../../components/header';



const Teacher = () => {
  return (
    <View style={globalStyle.wrapper}>
      <ScreenHeader
        pageTitle="Physics Coaches"
        goBackButton={true}
      />

    </View>
  );
}

export default Teacher;