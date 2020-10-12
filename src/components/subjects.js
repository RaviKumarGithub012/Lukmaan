import React from 'react';
import { View, Image } from 'react-native';
import { globalStyle } from '../assets/styles/global-style';

const Subjects = ({ icon }) => {
  return (
    <View style={globalStyle.subjectWrapper}>
      {icon && <Image source={icon} /> }
    </View>
  );
}
export default Subjects;