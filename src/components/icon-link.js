import React, { useContext } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import themeColors from "../assets/styles/theme-style.json";
import { arrow } from "../assets/images/imageData";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AuthUser } from "../services/context/context";
import { setDefault } from "../services/redux/credentional/login/action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const IconLink = ({ icon, title, setDefault }) => {
  const { signOut } = useContext(AuthUser);
  const btnEvents = async () => {
    await AsyncStorage.removeItem("userToken");
    await setDefault();
    if (title.toLowerCase() == "logout") signOut();
  };
  return (
    <TouchableWithoutFeedback onPress={btnEvents}>
      <View style={styles.linkWrapper}>
        {icon && <Image style={styles.linkIcon} source={icon} />}
        <Text style={styles.linkTitle}>{title}</Text>
        <Image style={styles.arrow} source={arrow} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  linkIcon: {
    width: 30,
    resizeMode: "contain",
  },
  linkTitle: {
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    width: "87%",
    paddingVertical: 12,
    color: themeColors.text_color_2,
    fontSize: 17,
  },
  linkWrapper: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  arrow: {
    position: "absolute",
    right: 20,
  },
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setDefault }, dispatch);

export default connect(null, mapDispatchToProps)(IconLink);
