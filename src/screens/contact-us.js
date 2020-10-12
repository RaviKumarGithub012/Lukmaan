import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { globalStyle } from '../assets/styles/global-style';
import themeColors from '../assets/styles/theme-style.json';
import ThemeButton from '../components/theme-btn';
import { Picker } from '@react-native-community/picker';
import * as yup from 'yup';
import ScreenHeader from '../components/header';
import { error, valid, dropdownArrow, defaultImg } from '../assets/images/imageData';

const RegistrUser = yup.object({
  name: yup.string().required(),
  number: yup.string().required().min(10).max(10),
  subject: yup.string().required()
});

const ContactUs = () => {

  var [term, setTerm] = useState(false);

  const TermChange = () => {
    setTerm(!term);
  }

  return (
    <View style={globalStyle.wrapper}>
      <ScreenHeader pageTitle="Contact Us" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={{ flex: 1, marginTop: 20, paddingHorizontal: 25 }}>
            <Formik
              initialValues={{ name: '', number: '', numberType: '+91', subject: '' }}
              onSubmit={values => console.log(values)}
              validationSchema={RegistrUser}
            >
              {({ handleChange, handleSubmit, values, errors, touched, handleBlur }) => (
                <View>

                  <View style={{ position: 'relative' }}>
                    <Text style={globalStyle.inputLabel}>Please enter your Full Name</Text>
                    <TextInput
                      autoCorrect={true}
                      style={globalStyle.form_control}
                      value={values.name}
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      textContentType='givenName'
                    />
                    {touched.name && errors.name && <Image style={globalStyle.inputImage} source={error} />}
                    {touched.name && !errors.name && <Image style={globalStyle.inputImage} source={valid} />}
                  </View>

                  <View style={{ position: 'relative' }}>
                    <Text style={[globalStyle.inputLabel, { marginBottom: 5 }]}>Mobile Number</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={styles.pickerFormat}>
                        <Picker
                          style={{ width: 100, height: 34 }}
                          selectedValue={values.numberType}
                          onValueChange={handleChange('numberType')}>
                          <Picker.Item label='+91' value='+91' />
                          <Picker.Item label='+90' value='+90' />
                          <Picker.Item label='+05' value='+05' />
                          <Picker.Item label='+04' value='+04' />
                          <Picker.Item label='+02' value='+02' />
                          <Picker.Item label='+01' value='+01' />
                        </Picker>
                        <Image source={dropdownArrow} style={styles.pickerArrow} />
                      </View>
                      <TextInput
                        style={globalStyle.form_control}
                        value={values.number}
                        onChangeText={handleChange('number')}
                        onBlur={handleBlur('number')}
                        keyboardType='numeric'
                        textContentType='telephoneNumber'
                      />
                    </View>
                    {touched.number && errors.number && <Image style={globalStyle.inputImage} source={error} />}
                    {touched.number && !errors.number && <Image style={globalStyle.inputImage} source={valid} />}
                  </View>

                  <View style={{ position: 'relative' }}>
                    <Text style={globalStyle.inputLabel}>Please enter your Course Name</Text>
                    <TextInput
                      style={globalStyle.form_control}
                      value={values.subject}
                      onChangeText={handleChange('subject')}
                      onBlur={handleBlur('subject')}
                      textContentType='jobTitle'
                    />
                    {touched.subject && errors.subject && <Image style={globalStyle.inputImage} source={error} />}
                    {touched.subject && !errors.subject && <Image style={globalStyle.inputImage} source={valid} />}
                  </View>

                  <TouchableOpacity onPress={TermChange} style={styles.termBtn}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <View>
                        {term ? <Image style={styles.termImg} source={valid} /> : <Image style={styles.termImg} source={defaultImg} />}
                      </View>
                      <Text style={styles.termText_1}>I agree to the <Text style={styles.termText_2}>Terms and Conditions</Text> </Text>
                    </View>
                  </TouchableOpacity>
                  <View>
                    <ThemeButton onPress={handleSubmit} btnText='Submit' />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  termText_1: {
    fontSize: 16,
    color: themeColors.text_color_2
  },
  termText_2:{
    fontWeight: '700'
  },
  termImg: {
    height: 30,
    resizeMode: 'contain'
  },
  termBtn: {
    marginTop: 25,
    marginBottom: 35
  },
  pickerFormat: {
    width: 55,
    overflow: 'hidden',
    position: 'relative',
    marginRight: 10,
    borderBottomWidth: 1
  },
  pickerArrow: {
    width: 35,
    resizeMode: 'contain',
    position: 'absolute',
    right: -10,
    top: 15
  }
});

export default ContactUs;