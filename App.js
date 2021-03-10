import React from "react";
import AllFonts from "./src/assets/styles/fonts";
import { Provider } from "react-redux";
import store from "./src/services/redux/store";
import MainScreen from "./main-screen";

/* public static boolean isEmulator() {
    return Build.FINGERPRINT.startsWith("generic")
            || Build.FINGERPRINT.startsWith("unknown")
            || Build.MODEL.contains("google_sdk")
            || Build.MODEL.contains("Emulator")
            || Build.MODEL.contains("Android SDK built for x86")
            || Build.MANUFACTURER.contains("Genymotion")
            || (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"))
            || "google_sdk".equals(Build.PRODUCT);
}*/

const App = () => {
  let ifFonts = AllFonts();
  if (!ifFonts) {
    return false;
  }

  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;
