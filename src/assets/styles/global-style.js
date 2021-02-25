import { StyleSheet } from "react-native";
import themeColors from "./theme-style.json";

export const globalStyle = StyleSheet.create({
  form_control: {
    borderBottomWidth: 1,
    height: 30,
    width: "100%",
    borderBottomColor: themeColors.border_color,
    color: themeColors.text_color_2,
    fontSize: 18,
    paddingTop: 6,
    paddingBottom: 0,
  },
  wrapper: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  wrapperPadding: {
    paddingHorizontal: 25,
  },
  commonBtn: {
    color: "#fff",
    padding: 12,
    fontSize: 22,
  },
  themeBtnRadius: {
    borderRadius: 20,
    marginBottom: 15,
  },
  pageTitle: {
    fontSize: 20,
    color: themeColors.text_color_2,
    textAlign: "center",
    fontFamily: "Quicksand-Bold",
    marginTop: -20,
    width: 130,
  },
  inputImage: {
    position: "absolute",
    right: -5,
    bottom: 5,
    resizeMode: "contain",
    height: 25,
  },
  inputLabel: {
    color: themeColors.text_color_2,
    fontFamily: "Quicksand-Bold",
    fontSize: 16,
    marginTop: 15,
  },
  termText_1: {
    fontSize: 16,
    fontFamily: "Quicksand-Light",
    color: themeColors.text_color_2,
    textAlign: "center",
  },
  termText_2: {
    fontSize: 18,
    fontFamily: "Quicksand-Bold",
  },
  slideTitle: {
    fontSize: 16,
    marginBottom: 10,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderColor: themeColors.text_color_2,
    marginRight: 20,
    color: themeColors.text_color_2,
    fontWeight: "700",
  },
  videoTitle: {
    fontSize: 14,
    borderBottomWidth: 0,
    marginBottom: 0,
    color: themeColors.text_color_2,
    fontWeight: "700",
    marginTop: 5,
  },
  imgFluid: {
    width: "100%",
    resizeMode: "contain",
  },
  subjectTitle: {
    transform: [{ rotate: "-90deg" }],
    fontSize: 20,
    borderLeftColor: "red",
    borderLeftWidth: 4,
  },
  tabBtn: {
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 30,
  },
  activeTab: {
    backgroundColor: themeColors.color_3,
    color: "#fff",
  },
  inActiveTab: {
    backgroundColor: "transparent",
    color: themeColors.color_3,
  },
});
