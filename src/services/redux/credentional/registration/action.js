import { REGISTRATION } from "./type";
import Config from "../../../config/config";
import { setAysnc } from "../../../utils/AsyncStorage";

export const userRegistration = (fname, email, mobile, id) => async (
  dispatch
) => {
  fetch(Config.loginApiUrl.registerstudent, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: fname,
      email: email,
      mobile: mobile,
      password: "testingpass",
      city: 30,
      user_type: "STUDENT",
      signUp_type: "normal",
      device_type: "A",
      latitude: "",
      longitude: "",
      course_interesteded_id: id,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: REGISTRATION,
        payload: data,
      });
    })
    .catch((err) => console.error(err));
};

export const setDefault = () => (dispatch) => {
  dispatch({ type: "DEFAULT" });
};
