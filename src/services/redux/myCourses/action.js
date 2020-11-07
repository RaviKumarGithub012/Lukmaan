import Config from "../../config/config";
import { getAsync } from "../../utils/AsyncStorage";
import { MY_COURSES } from "./type";

export const getCoursesList = () => async (dispatch) => {
  const token = await getAsync("userToken");
  fetch(Config.courses.coursesList, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
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
