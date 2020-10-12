import React from 'react';
import { View } from 'react-native';
import { globalStyle } from '../../../assets/styles/global-style';
import ScreenHeader from '../../../components/header';
import ThemeCarousel from '../../../components/theme-carousel';
import CardBox from '../../../components/card-box';

const data = [
  { id: 1, title: 'title 1' },
  { id: 2, title: 'title 2' },
  { id: 3, title: 'title 3' },
  { id: 4, title: 'title 4' }
]

const DashboardHome = () => {
  return (
    <View style={globalStyle.wrapper}>
      <ScreenHeader pageTitle="Dashboard Home" goBackButton={true} />
      <View style={{marginLeft: 20}}>
      <ThemeCarousel title="Home slider" Layout={CardBox} data={data} item={3} />
      </View>
    </View>
  );
}

export default DashboardHome;