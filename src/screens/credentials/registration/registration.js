import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from 'react-native';
import { Formik } from 'formik';
import ThemeButton from '../../../components/theme-btn';
import { Picker } from '@react-native-community/picker';
import * as yup from 'yup';
import ScreenHeader from '../../../components/header';
import { error, valid, dropdownArrow, defaultImg } from '../../../assets/images/imageData';
import { globalStyle } from '../../../assets/styles/global-style';
import { AuthUser } from '../../../services/context/context';

const RegistrUser = yup.object({
  name: yup.string().required(),
  number: yup.string().required().min(10).max(10),
  email: yup.string().email('Enter a Valid Email').required(),
  city: yup.string().required()
});

const Registration = ({ navigation, route, userRegistration, userdata, setDefault }) => {

  const { signUp } = useContext(AuthUser);
  var [term, setTerm] = useState(false);

  const TermChange = () => setTerm(!term);

  const handleRegistration = values => {
    if (term === true) {
      userRegistration(values.name, values.email, values.number, route.params.courseId);
    }
  }

  useEffect(() => {
    if (userdata !== undefined) {
      if (userdata.type == 'SUCCESS') {
        console.log(userdata, 'true');
        signUp();
      } else {
        console.log(userdata, 'false');
      }
    }
  }, [userdata]);

  useEffect(() => {
    return () => setDefault();
  }, []);

  return (
    <View style={globalStyle.wrapper}>
      <ScreenHeader pageTitle="Registration" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={{ flex: 1, marginTop: 20, paddingHorizontal: 25 }}>
            <Formik
              initialValues={{ name: '', number: '', numberType: '+91', email: '', city: '' }}
              onSubmit={values => handleRegistration(values)}
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
                          style={{ width: 100, height: 28 }}
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
                        style={[globalStyle.form_control, { width: '80%' }, { position: 'relative' }, { backgroundColor: '#fff' }]}
                        value={values.number}
                        maxLength={10}
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
                    <Text style={globalStyle.inputLabel}>Email</Text>
                    <TextInput
                      autoCorrect={true}
                      textContentType='emailAddress'
                      style={globalStyle.form_control}
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      textContentType='emailAddress'
                    />
                    {touched.email && errors.email && <Image style={globalStyle.inputImage} source={error} />}
                    {touched.email && !errors.email && <Image style={globalStyle.inputImage} source={valid} />}
                  </View>

                  <View style={{ position: 'relative' }}>
                    <Text style={globalStyle.inputLabel}>City</Text>
                    <TextInput
                      style={globalStyle.form_control}
                      value={values.city}
                      onChangeText={handleChange('city')}
                      onBlur={handleBlur('city')}
                      textContentType='addressCity'
                    />
                    {touched.city && errors.city && <Image style={globalStyle.inputImage} source={error} />}
                    {touched.city && !errors.city && <Image style={globalStyle.inputImage} source={valid} />}
                  </View>

                  <TouchableOpacity onPress={TermChange} style={styles.termBtn}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                      <View>
                        {term ? <Image style={styles.termImg} source={valid} /> : <Image style={styles.termImg} source={defaultImg} />}
                      </View>
                      <Text style={styles.termText_1}>I agree to the <Text style={styles.termText_2}>Terms and Conditions</Text> </Text>
                    </View>
                  </TouchableOpacity>
                  <View>
                    <ThemeButton onPress={handleSubmit} btnText='Register' />
                    <Text style={globalStyle.termText_1}>Already registered? <Text onPress={() => navigation.navigate('login')} style={globalStyle.termText_2}>LOGIN</Text></Text>
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
  termImg: {
    height: 20,
    resizeMode: 'contain'
  },
  termBtn: {
    marginVertical: 20
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

export default Registration;