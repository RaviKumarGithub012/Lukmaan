import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyle } from '../../../../assets/styles/global-style';
import { VideoData } from '../../../videos-data';
import CardBox from '../../../../components/card-box';
import ScreenHeader from '../../../../components/header';
import ThemeCarousel from '../../../../components/theme-carousel';
import Subjects from '../../../../components/subjects';
import ShareWithFriends from '../../../../components/share';
import { ecology, biology, art, geography } from '../../../../assets/images/imageData';
import { getAsync } from '../../../../services/utils/AsyncStorage';
import { videoPath } from '../../../../contexts/videoPath/videoPath';

const data = [
  { id: 1, icon: ecology },
  { id: 2, icon: biology },
  { id: 3, icon: geography },
  { id: 4, icon: art },
  { id: 5, icon: geography },
  { id: 6, icon: art },
]

const Dashboard = ({ videosData, latestVideos }) => {
  const [userName, setUserName] = useState('guest user');
  useEffect(() => {
    (async () => {
      try {
        await latestVideos();
        const name = await getAsync('loginDetails');
        if (JSON.parse(name)) {
          setUserName(JSON.parse(name));
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <videoPath.Provider value={{video_path: videosData?.video_path}}>
    <View style={[globalStyle.wrapper, { paddingBottom: 5 }]}>
      <ScreenHeader headerNav={true} isStudent={true} leftNotif={true} pageTitle={userName.first_name} rightCart={true} />
      <View style={{ marginTop: 50, flex: 1, marginLeft: 20 }}>
        <ScrollView>
          <ThemeCarousel title="Latest Videos" data={videosData?.payload ? videosData.payload : VideoData} item={3} Layout={CardBox} />
          {/* <ThemeCarousel title="Viwed Videos" data={VideoData} item={3} Layout={CardBox} /> */}
          <ThemeCarousel title="Based on Your Preference" data={data} item={4} Layout={Subjects} />
          <ShareWithFriends />
        </ScrollView>
      </View>
    </View>
    </videoPath.Provider>
  );
}

export default Dashboard;