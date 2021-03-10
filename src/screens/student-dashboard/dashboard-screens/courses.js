import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { globalStyle } from "../../../assets/styles/global-style";
import ScreenHeader from "../../../components/header";
import BookCourse from "../../../components/book-course";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCoursesList } from "../../../services/redux/myCourses/action";

const Courses = ({ myCourses, getCoursesList }) => {
  const [courseData, setcourseData] = useState([]);
  useEffect(() => {
    if (getCoursesList) getCoursesList();
  }, [getCoursesList]);

  useEffect(() => {
    if (myCourses !== undefined && myCourses !== null) {
      const filterData = myCourses?.filter(
        (item) => Number(item.subscribed) === 1
      );
      setcourseData([...filterData]);
    }
  }, [myCourses]);

  return (
    <View style={globalStyle.wrapper}>
      <ScreenHeader
        headerNav={true}
        goBackButton={true}
        pageTitle="My Courses"
      />
      <View
        style={{
          flex: 1,
          marginTop: 30,
          paddingHorizontal: 10,
        }}
      >
        {courseData && (
          <FlatList
            data={courseData}
            renderItem={({ item }) => {
              return <BookCourse title={item.course_title} />;
            }}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  myCourses: state.coursesListReducer.myCourses,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getCoursesList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
