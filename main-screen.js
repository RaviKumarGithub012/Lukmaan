import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import { SplashScreen } from "./src/assets/images/imageData";
import ScreenRoutes from "./src/routes/screen-routes";
import { StatusBar } from "expo-status-bar";
import themeColors from "./src/assets/styles/theme-style.json";
import { preventScreenCaptureAsync } from "expo-screen-capture";

const MainScreen = () => {
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setScreen(false);
    }, 3000);
    (async () => {
      await preventScreenCaptureAsync();
    })();
  }, []);

  return (
    <SafeAreaView style={[styles.mainScreen, { paddingTop: 15 }]}>
      <StatusBar backgroundColor={themeColors.color_2} />
      {screen ? (
        <Image
          source={SplashScreen}
          style={styles.mainScreen}
          resizeMode="stretch"
        />
      ) : (
        <ScreenRoutes />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    width: "100%",
  },
});

export default MainScreen;
