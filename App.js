import React from "react";
import AllFonts from "./src/assets/styles/fonts";
import { Provider } from "react-redux";
import store from "./src/services/redux/store";
import MainScreen from "./main-screen";

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
