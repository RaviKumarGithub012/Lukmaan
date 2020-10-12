import { VIDEO_DATA } from "./type";

const initialState = {
  latestVideos: []
}

const dashboardReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case VIDEO_DATA:
      return {
        ...state,
        latestVideos: payload
      }
    default:
      return { ...state }
  }
}

export default dashboardReducer;