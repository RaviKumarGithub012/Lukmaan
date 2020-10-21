import { USERLOGIN } from "./type";
import Config from "../../../config/config";
import { setAysnc } from "../../../utils/AsyncStorage";

export const userLoginFun = (phone_number) => {
  return (dispatch) => {
    fetch(Config.loginApiUrl.loginOtp, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mobile: `${phone_number}`,
        user_type: "student",
      }),
    })
      .then((json) => json.json())
      .then((res) => {
        dispatch({
          type: USERLOGIN,
          payload: res,
        });
        // (async () => {
        //   await setAysnc("loginDetails", res.payload);
        //   await setAysnc("userToken", JSON.stringify(res.payload.api_token));
        // })();
      })
      .catch((err) => console.error(err));
  };
};
export const setDefault = () => (dispatch) => {
  dispatch({ type: "DEFAULT" });
};
