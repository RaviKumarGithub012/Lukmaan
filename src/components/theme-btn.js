import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Button from 'react-native-button';
import themeColors from '../assets/styles/theme-style.json';
import { globalStyle } from '../assets/styles/global-style';

const ThemeButton = ({ btnText, onPress }) => {
  return (
    <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0 }} colors={[themeColors.color_1, themeColors.color_2]} style={globalStyle.themeBtnRadius}>
      <Button onPress={onPress} style={globalStyle.commonBtn}>{btnText}</Button>
    </LinearGradient>
  );
}

export default ThemeButton;