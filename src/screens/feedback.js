import React from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import ScreenHeader from '../components/header'
import { globalStyle } from '../assets/styles/global-style'
import themeColors from '../assets/styles/theme-style.json';
import ThemeButton from '../components/theme-btn';
import VideoToLeft from '../components/video-to-left';


const Feedback = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
      <View style={globalStyle.wrapper}>
        <ScreenHeader pageTitle="Feedback" headerNav={true} goBackButton={true} />
        <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 50 }}>
          <ScrollView>
            <VideoToLeft />
            <View>
              <Text style={styles.feedMsg}>Message</Text>
              <TextInput multiline={true} style={styles.textArea} textAlignVertical='top' />
              <ThemeButton btnText="Submit" />
            </View>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  feedMsg: {
    fontSize: 16,
    marginVertical: 10
  },
  textArea: {
    borderColor: themeColors.border_color,
    height: 150,
    width: '100%',
    borderWidth: 1,
    marginBottom: 50,
    borderRadius: 20,
    padding: 15,
    fontSize: 16
  },
});


export default Feedback;