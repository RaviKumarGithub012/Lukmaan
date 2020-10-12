import { getAsync } from "../../utils/AsyncStorage"
import Config from "../../config/config";
import { VIDEO_DATA } from "./type";


export const latestVideos = () => async dispatch => {
  const token = await getAsync('userToken');
  fetch(Config.dashboardUrl.latestVideos, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    }
  }).then(res => res.json())
    .then(data => {
      dispatch({ type: VIDEO_DATA, payload: data })
    })
    .catch(err => console.error(err));

}