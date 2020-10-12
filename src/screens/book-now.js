import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { globalStyle } from '../assets/styles/global-style';
import ScreenHeader from '../components/header';
import TeacherDtl from '../components/teacher-dtl';
import Button from 'react-native-button';
import ThemeButton from '../components/theme-btn';
import themeColors from '../assets/styles/theme-style.json';
import { paytm } from '../assets/images/imageData';


const BookNow = () => {

  const [isPay, setisPay] = useState(true);

  return (
    <View style={globalStyle.wrapper}>
      <ScreenHeader headerNav={true} pageTitle="Book Now" goBackButton={true} />
      <View style={{ paddingHorizontal: 20, paddingVertical: 10, marginTop: 50, flex: 1 }}>
        <ScrollView>
          <TeacherDtl />
          <Text style={styles.boldTxt}>Promo <Text style={styles.txtFormat}>Code</Text></Text>
          <View style={styles.applyCode}>
            <View style={styles.inputWrapper}>
              <TextInput textContentType="postalCode" placeholderTextColor={themeColors.grayColor} placeholder="Enter Code" style={styles.codeInput} />
            </View>
            <View style={styles.applyBtn}>
              <Button style={[globalStyle.tabBtn, globalStyle.activeTab, styles.applyTxt]}>APPLY</Button>
            </View>
          </View>
          <Text style={styles.txtFormat}>Select <Text style={styles.boldTxt}>Payment Mode</Text></Text>
          <TouchableWithoutFeedback onPress={() => setisPay(!isPay)}>
            <View style={styles.payment}>
              <View style={styles.outline}><View style={isPay ? styles.isCheck : null}></View></View>
              <Image style={styles.paymentImg} source={paytm} />
            </View>
          </TouchableWithoutFeedback>
          <ThemeButton btnText="Pay $ 75000" />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outline: {
    height: 35,
    width: 35,
    borderWidth: 3,
    borderRadius: 35 / 2,
    borderColor: themeColors.color_3,
    marginRight: 15,
    position: 'relative'
  },
  paymentImg: {
    resizeMode: 'contain',
    height: 30
  },
  isCheck: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: themeColors.color_3,
    borderRadius: 35 / 2,
    transform: [{ scale: 0.85 }]
  },
  applyTxt: {
    height: '100%',
    textAlignVertical: 'center',
    borderRadius: 22,
    paddingHorizontal: 30
  },
  payment: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
    shadowOpacity: 0.5,
    marginHorizontal: 2,
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 35
  },
  applyCode: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  inputWrapper: {
    width: '98%',
    position: 'relative',
    zIndex: 2,
    marginHorizontal: '1%'
  },
  codeInput: {
    width: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
    shadowOpacity: 0.5,
    paddingHorizontal: 15,
    borderRadius: 20,
    height: 50,
    fontSize: 20,
    paddingRight: 120
  },
  applyBtn: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 99,
    height: '100%'
  },
  txtFormat: {
    marginTop: 20,
    fontSize: 18
  },
  boldTxt: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '700'
  }
});

export default BookNow;