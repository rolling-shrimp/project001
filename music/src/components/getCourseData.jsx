import { useCallback, useEffect, useState } from "react";
import profileServicing from "../service/profile_Service";

const GetCourseData = (location, currentuser) => {
  const { token, user } = currentuser;
  const { role, id } = user;

  const [courses, setCourses] = useState([]);

  const getCourses = useCallback(async () => {
    try {
      let response =
        role === "student" && location === "/personalPage" && id && token
          ? await profileServicing.getEnrolledCourse(id, token)
          : await profileServicing.getcourse();
      setCourses(response.data);
    } catch (e) {
      console.log(e);
    }
  }, []);
  useEffect(() => {
    getCourses();
  }, [getCourses]);
  return { courses };
};

export default GetCourseData;
