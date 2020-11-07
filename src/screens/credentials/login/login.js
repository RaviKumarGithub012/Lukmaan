import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  StyleSheet,
} from "react-native";
import { globalStyle } from "../../../assets/styles/global-style";
import ThemeButton from "../../../components/theme-btn";
import ScreenHeader from "../../../components/header";
import { error, valid } from "../../../assets/images/imageData";
import Regex from "../../../services/utils/regex";

const Login = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleLogin = () => {
    if (isCorrect === true) {
      navigation.navigate("verify", { mobileNumber: phoneNumber });
    }
  };

  const handleBlur = () => {
    let isCorrectNumber = Regex.phoneNumber.test(phoneNumber);
    if (isCorrectNumber && phoneNumber.length === 10) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

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
              <View>
                <View style={{ position: "relative" }}>
                  <Text style={globalStyle.inputLabel}>Mobile Number</Text>
                  <TextInput
                    style={globalStyle.form_control}
                    value={phoneNumber}
                    autoFocus={true}
                    maxLength={10}
                    onChangeText={(text) => setPhoneNumber(text)}
                    onBlur={handleBlur}
                    keyboardType="numeric"
                  />
                  {isCorrect === false && (
                    <Image style={globalStyle.inputImage} source={error} />
                  )}
                  {isCorrect === true && (
                    <Image style={globalStyle.inputImage} source={valid} />
                  )}
                </View>
                {isCorrect === false && (
                  <Text style={styles.errorMsg}>
                    Please enter a correct mobile number!
                  </Text>
                )}
                <View style={{ marginTop: 30 }}>
                  <ThemeButton onPress={handleLogin} btnText="Login" />
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
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMsg: {
    color: "red",
    fontSize: 11,
    marginTop: 2,
  },
});

export default Login;
