import React, { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { globalStyle } from "../../assets/styles/global-style";
import themeColors from "../../assets/styles/theme-style.json";
import ScreenHeader from "../../components/header";
import { AuthUser } from "../../services/context/context";
import { userLoginFun } from "../../services/redux/credentional/login/action";
import { setDefault } from "../../services/redux/credentional/registration/action";
import { setAysnc } from "../../services/utils/AsyncStorage";

const Verify = ({ userData, route, setDefault, userLoginFun }) => {
  const { signIn, signUp } = useContext(AuthUser);
  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const [otpArray, setOtpArray] = useState(["", "", "", ""]);

  useEffect(() => {
    if (!route?.params?.newUserData) {
      userLoginFun(route.params.mobileNumber);
    }
    return () => setDefault();
  }, []);

  const onOtpKeyPress = (index) => ({ nativeEvent: { key: value } }) => {
    if (value === "Backspace" && otpArray[index] === "") {
      if (index === 1) {
        firstTextInputRef.current.focus();
      } else if (index === 2) {
        secondTextInputRef.current.focus();
      } else if (index === 3) {
        thirdTextInputRef.current.focus();
      }
    }
  };

  const refCallback = (textInputRef) => (node) => {
    textInputRef.current = node;
  };

  const onOtpChange = (index) => async (value) => {
    const otpArrayCopy = otpArray.concat();
    otpArrayCopy[index] = value;
    setOtpArray(otpArrayCopy);
    if (value !== "") {
      if (index === 0) {
        secondTextInputRef.current.focus();
      } else if (index === 1) {
        thirdTextInputRef.current.focus();
      } else if (index === 2) {
        fourthTextInputRef.current.focus();
      }
      const finalOtp = otpArrayCopy.join("");
      if (finalOtp.length === 4) {
        if (route?.params?.newUserData) {
          if (finalOtp == route?.params?.newUserOtp) {
            (async () => {
              await setAysnc(
                "loginDetails",
                route?.params?.newUserData?.payload
              );
              await setAysnc(
                "userToken",
                JSON.stringify(route?.params?.newUserData?.payload?.api_token)
              );
            })();
            signUp();
          } else {
            Alert.alert("OTP is not correct please try again!");
          }
        } else {
          const { payload } = userData;
          if (finalOtp == payload?.otp) {
            (async () => {
              await setAysnc("loginDetails", payload);
              await setAysnc("userToken", JSON.stringify(payload.api_token));
            })();
            signIn();
          } else {
            Alert.alert("OTP is not correct please try again!");
          }
        }
      }
    }
  };

  return (
    <View style={globalStyle.wrapper}>
      <ScreenHeader
        pageTitle="Enter Password"
        goBackButton={true}
        headerNav={true}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <ScrollView>
          <Text
            style={[
              themeColors.text_color_2,
              globalStyle.inputLabel,
              { textAlign: "center", paddingHorizontal: 20 },
            ]}
          >
            {route?.params?.registered
              ? route?.params?.registered
              : "We will send you an OTP to verify"}
          </Text>
          <Text
            style={[
              themeColors.text_color_2,
              globalStyle.inputLabel,
              { textAlign: "center", marginTop: 5 },
            ]}
          >
            (+91) 111 222 3344
          </Text>
          <View style={styles.formWrapper}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {[
                firstTextInputRef,
                secondTextInputRef,
                thirdTextInputRef,
                fourthTextInputRef,
              ].map((textInputRef, index) => (
                <TextInput
                  key={index}
                  keyboardType="phone-pad"
                  maxLength={1}
                  autoFocus={index === 0 ? true : undefined}
                  onChangeText={onOtpChange(index)}
                  onKeyPress={onOtpKeyPress(index)}
                  ref={refCallback(textInputRef)}
                  style={[globalStyle.form_control, styles.otp]}
                />
              ))}
            </View>
            <Text style={[globalStyle.termText_1, { marginTop: 15 }]}>
              Don’t have an account?{" "}
              <Text style={globalStyle.termText_2}>Sign Up</Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otp: {
    width: 50,
    textAlign: "center",
  },
  formWrapper: {
    paddingHorizontal: 50,
    marginTop: 10,
    maxWidth: 350,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const mapStateToProps = (state) => ({
  userData: state.userLogin.userData,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      userLoginFun,
      setDefault,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
