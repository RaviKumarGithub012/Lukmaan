import AsyncStorage from "@react-native-async-storage/async-storage";
import Config from "../../config/config";
import { MY_COURSES } from "./type";

export const getCoursesList = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("userToken");
  fetch(Config.courses.myCourses, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: MY_COURSES,
        payload: data?.payload,
      })
    )
    .catch((err) => console.error(err));
};
