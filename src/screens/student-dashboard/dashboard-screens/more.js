import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { globalStyle } from '../../../assets/styles/global-style';
import ScreenHeader from '../../../components/header';
import IconLink from '../../../components/icon-link';
import {
  support,
  termCondition,
  privacyPolicy,
  invite,
  appRate,
  logout
} from '../../../assets/images/imageData';
import { getAsync } from '../../../services/utils/AsyncStorage';

const data = [
  { id: '1', icon: support, title: 'Support' },
  { id: '2', icon: termCondition, title: 'Terms & Conditions' },
  { id: '3', icon: privacyPolicy, title: 'Privacy Policy' },
  { id: '4', icon: invite, title: 'Invite Friends' },
  { id: '5', icon: appRate, title: 'Rate Our App' },
  { id: '6', icon: logout, title: 'Logout' },
]

const MoreDetails = () => {
  const [userName, setUserName] = useState('guest user');
  useEffect(() => {
    (async () => {
      try {
        const name = await getAsync('loginDetails');
        setUserName(JSON.parse(name));
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <View style={globalStyle.wrapper}>
      <ScreenHeader isStudent={true} pageTitle={userName.first_name} />
      <View style={{ flex: 1, marginTop: 50 }}>
        <View style={styles.linkWrapper}>
          <SafeAreaView>
            <FlatList
              data={data}
              renderItem={({ item }) => <IconLink icon={item.icon} title={item.title} />}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  linkWrapper: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    elevation: 5,
    margin: 20,
    borderRadius: 15
  }
});

export default MoreDetails;