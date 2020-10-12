import React from 'react';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';

 const AllFonts = () => {
  let [fontsLoaded] = useFonts({
    'Quicksand-Bold': require('../fonts/Quicksand-Bold.ttf'),
    'Quicksand-Light': require('../fonts/Quicksand-Light.ttf'),
    'Quicksand-Medium': require('../fonts/Quicksand-Medium.ttf'),
    'Quicksand-Regular': require('../fonts/Quicksand-Regular.ttf'),
    'Quicksand-SemiBold': require('../fonts/Quicksand-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    <AppLoading />
    return false;
  }
  return true;
}

export default AllFonts;