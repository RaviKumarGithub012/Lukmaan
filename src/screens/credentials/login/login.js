import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { Formik } from "formik";
import { globalStyle } from "../../../assets/styles/global-style";
import ThemeButton from "../../../components/theme-btn";
import ScreenHeader from "../../../components/header";
import * as yup from "yup";
import { error, valid } from "../../../assets/images/imageData";
import { AuthUser } from "../../../services/context/context";

const LoginUser = yup.object({
  number: yup.string().required().min(10).max(10),
});

const Login = ({ navigation, userLoginFun, setDefault, userData }) => {
  const { signIn } = useContext(AuthUser);

  const handleLogin = (values) => {
    if (values?.number) {
      // userLoginFun(values.number);
      navigation.navigate("verify", { mobileNumber: values.number });
    }
  };
  // useEffect(() => {
  //   if (userData.status === true) signIn();
  // }, [userData]);

  // useEffect(() => {
  //   return () => setDefault();
  // }, []);

  return (
    <View style={globalStyle.wrapper}>
      <ScreenHeader pageTitle="Login" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ScrollView>
            <View style={[globalStyle.wrapperPadding]}>
              <Formik
                initialValues={{ number: "" }}
                onSubmit={(values) => handleLogin(values)}
                validationSchema={LoginUser}
              >
                {({
                  handleChange,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                  handleBlur,
                }) => (
                  <View>
                    <View style={{ position: "relative" }}>
                      <Text style={globalStyle.inputLabel}>Mobile Number</Text>
                      <TextInput
                        style={globalStyle.form_control}
                        value={values.number}
                        maxLength={10}
                        onChangeText={handleChange("number")}
                        onBlur={handleBlur("number")}
                        keyboardType="numeric"
                      />
                      {touched.number && errors.number && (
                        <Image style={globalStyle.inputImage} source={error} />
                      )}
                      {touched.number && !errors.number && (
                        <Image style={globalStyle.inputImage} source={valid} />
                      )}
                    </View>

                    <View style={{ marginTop: 30 }}>
                      <ThemeButton onPress={handleSubmit} btnText="Login" />
                      <Text style={globalStyle.termText_1}>
                        Don’t have an account?{" "}
                        <Text
                          onPress={() => navigation.navigate("register")}
                          style={globalStyle.termText_2}
                        >
                          Sign Up
                        </Text>
                      </Text>
                    </View>
                  </View>
                )}
              </Formik>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Login;
