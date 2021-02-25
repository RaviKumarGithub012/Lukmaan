import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "react-native-button";
import themeColors from "../assets/styles/theme-style.json";
import { globalStyle } from "../assets/styles/global-style";

const BookCourse = ({
  isbutton,
  title,
  days,
  session,
  time,
  price,
  student,
  locationAt,
}) => {
  return (
    <View style={styles.courseWrapper}>
      <View>
        <Text style={styles.courseHeading}>{title}</Text>
        {days && (
          <Text style={[styles.bookTxt, { textAlign: "left" }]}>{days}</Text>
        )}
        {time && (
          <Text style={[styles.bookTxt, { textAlign: "left" }]}>{time}</Text>
        )}
      </View>
      <View style={styles.bookdtl}>
        <Text
          style={[
            styles.bookTxt,
            {
              color: themeColors.text_color_2,
              marginBottom: -2,
              fontWeight: "700",
            },
          ]}
        >
          {price}
        </Text>
        {session && (
          <Text style={[styles.bookTxt, { marginBottom: 5 }]}>{session}</Text>
        )}
        {isbutton && (
          <Button style={[globalStyle.tabBtn, globalStyle.activeTab]}>
            Book Now
          </Button>
        )}
        {student && <Text style={styles.bookTxt}>{student}</Text>}
        {locationAt && <Text style={styles.bookTxt}>{locationAt}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  courseWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 15,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  courseHeading: {
    color: themeColors.text_color_2,
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 5,
  },
  bookTxt: {
    marginVertical: 1,
    color: themeColors.grayColor,
    textAlign: "center",
  },
});

export default BookCourse;
