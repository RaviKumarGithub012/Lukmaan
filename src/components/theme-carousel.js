import React, { useRef } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { globalStyle } from '../assets/styles/global-style';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth } = Dimensions.get('window');

const ThemeCarousel = ({ title, data, Layout, item }) => {
  const _carousel = useRef();
  const itemWidth = item ? viewportWidth / item : viewportWidth;
  
  const _renderItem = ({ item, index }) => {
    return <Layout {...item} {...index} />
  }

  return (
    <View>
      <Text style={globalStyle.slideTitle}>{title}</Text>
      <Carousel
        ref={_carousel}
        data={data}
        layout="default"
        renderItem={_renderItem}
        sliderWidth={viewportWidth}
        itemWidth={itemWidth}
        activeSlideAlignment={'start'}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        enableSnap={true}
        loop={false}
      />
    </View>
  );
}

export default ThemeCarousel;