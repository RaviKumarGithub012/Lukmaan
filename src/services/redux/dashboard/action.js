import Config from "../../config/config";
import { VIDEO_DATA } from "./type";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const latestVideos = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("userToken");
  fetch(Config.dashboardUrl.latestVideos, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: VIDEO_DATA, payload: data });
    })
    .catch((err) => console.error(err));
};
