const baseUrl = "http://15.207.23.184/";

const Config = {
  loginApiUrl: {
    login: `${baseUrl}api/login`,
    registerstudent: `${baseUrl}api/registerstudent`,
    loginOtp: `${baseUrl}api/sendOtp`,
  },
  courses: {
    myCourses: `${baseUrl}/api/myCourses`,
    coursesList: `${baseUrl}api/coursesList`,
  },
  profile: `${baseUrl}api/update_profile`,
  dashboardUrl: {
    latestVideos: `${baseUrl}api/dashboard`,
  },
};

export default Config;
