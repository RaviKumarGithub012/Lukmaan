import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { loadingGif } from '../../assets/images/imageData';
import { globalStyle } from '../../assets/styles/global-style';

const Preloader = () => {
  return (
    <View style={[globalStyle.wrapper, styles.preloaderWrapper]}>
      <Image source={loadingGif} style={styles.preloaderImage} resizeMode="center" />
    </View>
  )
}
const styles = StyleSheet.create({
  preloaderImage: {
    marginTop: -100
  },
  preloaderWrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.85)',
    flex: 1,
    width: '100%',
    alignItems: 'center'
  }
});

export default Preloader;