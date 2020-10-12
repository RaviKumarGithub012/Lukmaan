import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Button from 'react-native-button';
import { globalStyle } from '../assets/styles/global-style';
import { useNavigation } from '@react-navigation/native';
import { fBg, closeImg, goBack, notif, cartIcon, student } from '../assets/images/imageData';

const ScreenHeader = ({ pageTitle, headerNav, goBackButton, closeButton, rightCart, leftNotif, isStudent }) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.screenWrapper}>
      <Image source={fBg} style={{ width: '100%', resizeMode: 'stretch' }} />
      {
        headerNav ? <View style={styles.headerBtn}>
          {
            goBackButton ? <Button>
              <Image source={goBack} />
            </Button>
              : null
          }

          {
            closeButton ? <Button>
              <Image source={closeImg} />
            </Button>
              : null
          }

          {
            leftNotif ? <Button>
              <Image source={notif} />
            </Button>
              : null
          }

          {
            rightCart ? <Button>
              <Image source={cartIcon} />
            </Button>
              : null
          }

        </View>
          : null
      }
      <View style={{ justifyContent: 'center', flexDirection: 'row', position: 'relative' }}>
        {
          isStudent ? <Image source={student} style={styles.student_dp} /> : null
        }
        <Text numberOfLines={2} style={globalStyle.pageTitle}> {pageTitle} </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  student_dp: {
    position: 'absolute',
    left: 20,
    top: -60,
    resizeMode: 'contain',
  },
  screenWrapper: {
    backgroundColor: '#fff',
    position: 'relative'
  },
  headerBtn: {
    position: 'absolute',
    top: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10
  }
});

export default ScreenHeader;