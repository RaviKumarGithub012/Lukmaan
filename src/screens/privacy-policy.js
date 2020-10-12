import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ScreenHeader from '../components/header';
import { globalStyle } from '../assets/styles/global-style';


const PrivacyPolicy = () => {
  return (
    <View style={globalStyle.wrapper}>
      <ScreenHeader headerNav={true} goBackButton={true} pageTitle="Privacy Policy" />
      <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 30 }}>
        <ScrollView>
          <Text style={styles.txt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
          </Text>

          <Text style={styles.txt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
          </Text>

          <Text style={styles.txt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
          </Text>

          <Text style={styles.txt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
          </Text>

          <Text style={styles.txt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
          </Text>

          <Text style={styles.txt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
          </Text>
        </ScrollView>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  txt: {
    fontSize: 14,
    marginTop: 15
  }
});

export default PrivacyPolicy;