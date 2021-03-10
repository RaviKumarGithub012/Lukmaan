import React, { Fragment } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { globalStyle } from "../assets/styles/global-style";
import themeColors from "../assets/styles/theme-style.json";
import { shareIcon } from "../assets/images/imageData";
import { TouchableOpacity } from "react-native-gesture-handler";

const ShareWithFriends = ({ onShare }) => {
  return (
    <TouchableOpacity onPress={onShare}>
      <Text style={globalStyle.slideTitle}>Share the app</Text>
      <View style={{ alignItems: "center", marginLeft: -20 }}>
        <View style={styles.shareWrapper}>
          <View style={{ width: "18%", marginRight: 10 }}>
            <Image source={shareIcon} style={styles.shareIcon} />
          </View>
          <View
            style={{
              width: "81%",
              position: "relative",
              paddingRight: 10,
              paddingBottom: 10,
            }}
          >
            <Text style={styles.shareTitle}>Share with Friends</Text>
            <Text style={styles.shareDtl}>
              Share app to friends and make them fall in love with learning
            </Text>
            <Image source={shareIcon} style={styles.shareTo} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shareWrapper: {
    maxWidth: 300,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
    paddingTop: 0,
    paddingHorizontal: 10,
    borderRadius: 18,
  },
  shareIcon: {
    width: 50,
    resizeMode: "contain",
  },
  shareTo: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    position: "absolute",
    right: 0,
    bottom: -12,
  },
  shareTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: themeColors.text_color_2,
  },
  shareDtl: {
    color: themeColors.text_color_2,
    opacity: 0.5,
  },
});

export default ShareWithFriends;
