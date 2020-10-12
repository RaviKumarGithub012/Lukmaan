import React, { useEffect, useMemo, useReducer } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IntroSlide from "../screens/intro";
import ChooseCourse from "../screens/choose-your-course";
import Registration from "../screens/credentials/registration/index";
import Login from "../screens/credentials/login/index";
import Verify from "../screens/credentials/verify";
import StudentDashboard from "../screens/student-dashboard/student-dashboard";
import SingleVideo from "../components/single-video";
import { AuthUser } from "../services/context/context";
import {
  setAysnc,
  getAsync,
  removeAsync,
} from "../services/utils/AsyncStorage";

const Stack = createStackNavigator();

function ScreenRoutes() {
  const initialState = {
    isSignedIn: false,
    isIntro: false,
  };
  const loginUserReducer = (prevState, action, ...rest) => {
    const { type, payload } = action;
    switch (type) {
      case "SIGN_IN":
        return {
          ...prevState,
          isSignedIn: true,
        };
      case "SIGN_OUT":
        return {
          ...prevState,
          isSignedIn: false,
        };
      case "SIGN_UP":
        return {
          ...prevState,
          isSignedIn: true,
        };
      case "FIRST_SCREEN":
        return {
          ...prevState,
          isIntro: true,
        };
      default:
        return {
          ...prevState,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginUserReducer, initialState);

  const AuthFun = useMemo(
    () => ({
      signIn: () => {
        dispatch({ type: "SIGN_IN" });
      },
      signOut: async () => {
        try {
          await removeAsync("loginDetails");
          await setAysnc("isnotIntro", true);
          dispatch({ type: "SIGN_OUT" });
          dispatch({ type: "FIRST_SCREEN" });
        } catch (error) {
          console.error(error);
        }
      },
      signUp: async () => {
        dispatch({ type: "SIGN_UP" });
      },
    }),
    []
  );

  useEffect(() => {
    (async () => {
      try {
        let isintro = await getAsync("isnotIntro");
        let isValidUser = await getAsync("loginDetails");
        if (isValidUser !== null) {
          dispatch({ type: "FIRST_SCREEN" });
          dispatch({ type: "SIGN_IN" });
        }
        if (isintro) {
          dispatch({ type: "FIRST_SCREEN" });
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [initialState.isSignedIn]);

  return (
    <AuthUser.Provider value={AuthFun}>
      <NavigationContainer initialRouteName="choose">
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {loginState.isSignedIn ? (
            <>
              <Stack.Screen
                name="studentDashboard"
                component={StudentDashboard}
              />
              <Stack.Screen name="singleVideo" component={SingleVideo} />
              <Stack.Screen name="verify" component={Verify} />
            </>
          ) : (
            <>
              {loginState.isIntro ? null : (
                <Stack.Screen name="intro" component={IntroSlide} />
              )}
              <Stack.Screen name="choose" component={ChooseCourse} />
              <Stack.Screen name="register" component={Registration} />
              <Stack.Screen name="login" component={Login} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthUser.Provider>
  );
}

export default ScreenRoutes;
