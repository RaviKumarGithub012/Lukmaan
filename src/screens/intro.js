import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Button from 'react-native-button';
import { LinearGradient } from 'expo-linear-gradient';
import { slide1, slide2, slide3, Bg } from '../assets/images/imageData';
import themeColors from '../assets/styles/theme-style.json';
import { useNavigation } from '@react-navigation/native';


const { width: viewportWidth } = Dimensions.get('window');

const IntroSlide = () => {

  const navigation = useNavigation();
  const _carousel = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slides, setSlides] = useState([
    {
      url: slide1,
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
      url: slide2,
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
      url: slide3,
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
  ]);


  const _renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.bannerWrapper}>
        <Image source={item.url} style={styles.bannerImg} />
        <Text style={styles.bannerTxt}>{item.details}</Text>
      </View>
    )
  }
  return (
    <LinearGradient style={{ flex: 1, height: '100%', width: '100%' }} colors={[themeColors.color_1, themeColors.color_2]}>
      <View style={styles.wrapper}>
        <View style={{ alignItems: 'flex-end' }}>
          <Button onPress={() => navigation.navigate('choose')} style={{ color: '#707070', marginRight: 15, marginTop: 15 }}>SKIP</Button>
        </View>
        <View style={{ flex: 1, marginTop: 10 }}>
          <Carousel
            ref={_carousel}
            data={slides}
            renderItem={_renderItem}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            onSnapToItem={index => setActiveIndex(index)}
          />
          <Pagination
            dotsLength={slides.length}
            activeDotIndex={activeIndex}
            dotStyle={{
              width: 35,
              height: 10,
              borderRadius: 5,
              marginHorizontal: -2,
              backgroundColor: themeColors.color_1,
              shadowColor: "#000",
              shadowOpacity: 0.2,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            inactiveDotStyle={{
              backgroundColor: themeColors.color_1,
              width: 10,
            }}
            inactiveDotOpacity={1}
            inactiveDotScale={1}
          />
        </View>
        <Image source={Bg} style={styles.footerImg} />
        <View style={styles.footerBtn}>
          {
            activeIndex === 2 ? 
            <Button style={styles.nextBtn} onPress={() => navigation.navigate('choose')}>Finish</Button> 
            : 
            <Button style={styles.nextBtn} onPress={ () => _carousel.current._snapToItem(activeIndex + 1) }>Next</Button>
          }
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  footerBtn: {
    backgroundColor: themeColors.color_1,
    padding: 20
  },
  footerImg: {
    resizeMode: 'stretch',
    width: '100%',
    height: 100
  },
  nextBtn: {
    backgroundColor: '#fff',
    color: themeColors.text_color_1,
    padding: 10,
    fontSize: 20,
    fontWeight: '600',
    borderRadius: 20
  },
  bannerImg: {
    resizeMode: 'contain',
    height: 250,
    width: '100%'
  },
  bannerTxt: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16
  },
  bannerWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  }
});

export default IntroSlide;