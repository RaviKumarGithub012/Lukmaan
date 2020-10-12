import React from "react";
import { Image } from "react-native";
import Dashboard from "./dashboard-screens/dashboard/index";
import themeColors from "../../assets/styles/theme-style.json";
import Booking from "./dashboard-screens/booking";
import Courses from "./dashboard-screens/courses";
import MoreDetails from "./dashboard-screens/more";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  homeActive,
  homeInActive,
  dashboardActive,
  dashboardInActive,
  bookingActive,
  bookingInActive,
  sessionsActive,
  sessionsInActive,
  moreActive,
  moreInActive,
} from "../../assets/images/imageData";

const Tab = createBottomTabNavigator();

const StudentDashboard = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#FFF",
        activeBackgroundColor: "#A4C733",
        inactiveTintColor: themeColors.text_color_2,
        style: {
          paddingHorizontal: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: themeColors.color_2,
          height: 70,
        },
        labelStyle: {
          fontSize: 13,
          fontWeight: "100",
          paddingBottom: 10,
          paddingHorizontal: 2,
        },
      }}
    >
      <Tab.Screen
        name="dashboard"
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ focused }) => {
            const image = focused ? dashboardActive : dashboardInActive;
            return <Image style={{ marginTop: 15 }} source={image} />;
          },
        }}
        component={Dashboard}
      />
      <Tab.Screen
        name="booking"
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon: ({ focused }) => {
            const image = focused ? bookingActive : bookingInActive;
            return <Image style={{ marginTop: 15 }} source={image} />;
          },
        }}
        component={Booking}
      />
      <Tab.Screen
        name="courses"
        options={{
          tabBarLabel: "Courses",
          tabBarIcon: ({ focused }) => {
            const image = focused ? sessionsActive : sessionsInActive;
            return <Image style={{ marginTop: 15 }} source={image} />;
          },
        }}
        component={Courses}
      />
      <Tab.Screen
        name="more"
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ focused }) => {
            const image = focused ? moreActive : moreInActive;
            return <Image style={{ marginTop: 15 }} source={image} />;
          },
        }}
        component={MoreDetails}
      />
    </Tab.Navigator>
  );
};

export default StudentDashboard;
