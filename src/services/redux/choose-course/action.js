import Config from "../../config/config";
import { CHOOSE_COURSE } from "./type";

export const chooseCourse = () => {
  return (dispatch) => {
    fetch(Config.courses.coursesList, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: CHOOSE_COURSE, payload: data.payload }))
      .catch((err) => console.error(err));
  };
};
