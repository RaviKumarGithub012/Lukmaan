import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { globalStyle } from '../../assets/styles/global-style';
import themeColors from '../../assets/styles/theme-style.json';
import * as yup from 'yup';
import { Formik } from 'formik';
import ScreenHeader from '../../components/header';

const OtpValidation = yup.object({
  number: yup.string().required().min(1).max(1)
});

const Verify = () => {
  return (
    <View style={globalStyle.wrapper}>
      <ScreenHeader pageTitle="Enter your Phone number" goBackButton={true} headerNav={true} />
      <View style={{ marginTop: 100 }}>
        <Text style={[themeColors.text_color_2, globalStyle.inputLabel, { textAlign: 'center' }]}>We will send you an OTP to verify</Text>
        <Text style={[themeColors.text_color_2, globalStyle.inputLabel, { textAlign: 'center', marginTop: 5 }]}>(+91) 111 222 3344</Text>
        <View style={styles.formWrapper}>
          <Formik
            initialValues={{ number: 'X' }}
            validationSchema={OtpValidation}
          >
            {({ handleChange, values }) => (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput
                  onChangeText={handleChange('number')}
                  value={values.number}
                  style={[globalStyle.form_control, styles.otp]}
                />

                <TextInput
                  onChangeText={handleChange('number')}
                  value={values.number}
                  style={[globalStyle.form_control, styles.otp]}
                />

                <TextInput
                  onChangeText={handleChange('number')}
                  value={values.number}
                  style={[globalStyle.form_control, styles.otp]}
                />

                <TextInput
                  onChangeText={handleChange('number')}
                  value={values.number}
                  style={[globalStyle.form_control, styles.otp]}
                />

              </View>
            )}
          </Formik>

          <Text style={[globalStyle.termText_1, { marginTop: 15 }]}>Don’t have an account? <Text style={globalStyle.termText_2}>Sign Up</Text></Text>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  otp: {
    width: 50,
    textAlign: 'center'
  },
  formWrapper: {
    paddingHorizontal: 50,
    marginTop: 10,
    maxWidth: 350,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export default Verify;