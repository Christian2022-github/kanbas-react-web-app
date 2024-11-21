import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as enrollmentsClient from "./Courses/Enrollments/client"

import * as coursesClient from "./Courses/client";

import { setEnrollments, enroll, unenroll } from "./Courses/Enrollments/reducer";

export default function Dashboard(
  { courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
  }: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }
) {


  const dispatch = useDispatch();

  const enrollInCourse = async (courseId: string) => {
    if (!courseId || !currentUser?._id) return;

    const enrollment = {
      course: courseId,
      user: currentUser._id,
    };
    const newEnrollment = await enrollmentsClient.enrollUserInCourse(enrollment.user, enrollment.course);
    dispatch(enroll(newEnrollment));
    // fetchEnrollments();

  };

  const [totalCourses, setTotalCourses] = useState(0);
  const [allClasses, setAllClasses] = useState([]);

  const unenrollFromCourse = async (courseId: string) => {
    if (!courseId || !currentUser?._id) return;

    const enrollment = {
      course: courseId,
      user: currentUser._id,
    };
    const newEnrollment = await enrollmentsClient.unenrollUserInCourse(enrollment.user, enrollment.course);
    dispatch(unenroll(enrollment));

    // fetchEnrollments();

  };


  // const unenrollFromCourse = async (courseId: string) => {
  //   if (!courseId || !currentUser?._id) return;

  //   const enrollment = {
  //     course: courseId,
  //     user: currentUser._id,
  //   };

  //   try {
  //     await enrollmentsClient.unenrollUserInCourse(enrollment.user, enrollment.course);
  //     dispatch(unenroll(enrollment));
  //     fetchEnrollments(); // Refresh the enrollments from the server

  //     // Update theCourses state to reflect the unenrollment
  //     setTheCourses((prevCourses) =>
  //       prevCourses.map((course) =>
  //         course._id === courseId ? { ...course, enrolled: false } : course
  //       )
  //     );
  //   } catch (error) {
  //     console.error('Failed to unenroll:', error);
  //   }
  // };




  const fetchEnrollments = async () => {
    const userEnrollments = await enrollmentsClient.findEnrollmentsFromUser(currentUser._id);
    dispatch(setEnrollments(userEnrollments));
  };

  // const fetchEnrollments = async () => {
  //   try {
  //     const userEnrollments = await enrollmentsClient.findEnrollmentsFromUser(currentUser._id);
  //     dispatch(setEnrollments(userEnrollments));

  //     // Update theCourses based on current enrollments
  //     // setTheCourses((prevCourses) =>
  //     //   prevCourses.map((course) => ({
  //     //     ...course,
  //     //     enrolled: userEnrollments.some((theCourse: any) => theCourse.course === course._id),
  //     //   }))
  //     // );
  //   } catch (error) {
  //     console.error('Failed to fetch enrollments:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchEnrollments();
  // }, []);


  const fetchAllCourses = async () => {


    const allClasses = await coursesClient.fetchAllCourses();
    setAllClasses(allClasses);
    setTotalCourses(allClasses.length);


    dispatch(setEnrollments(allClasses));
  };
  // useEffect(() => {
  //   fetchAllCourses();
  // }, []);

  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const isStudent = currentUser.role === "STUDENT";

  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);


  const enrolledCourses = courses;

  // const enrolledCourses = courses.filter(course =>
  //   enrollments.some((enrollment: { user: string; course: string }) => enrollment.course === course._id)
  // );

  const [theCourses, setTheCourses] = useState<any[]>([])

  const [showAllCourses, setShowAllCourses] = useState(false);
  const handleToggleCourses = () => {
    setShowAllCourses(!showAllCourses);

    if (!showAllCourses) {
      // fetchEnrollments();
      console.log(enrolledCourses)
      const c = allClasses.map((theCourse: any) => {
        const enrolled = enrolledCourses.some((e: any) => e._id === theCourse._id)
        return { ...theCourse, enrolled }
      })
      setTheCourses(c); // jga
    }
    else {
      setTheCourses(enrolledCourses);
    }


  };


  useEffect(() => {
    if (showAllCourses) {
      fetchAllCourses();
    } else {
      fetchEnrollments();
    }
  }, [showAllCourses]);

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />


      {isStudent ? (
        <button
          className="btn btn-primary float-end mt-2 mb-4"
          id="wd-enrollments-button"
          style={{ padding: "8px 16px" }}
          onClick={handleToggleCourses}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      ) : (
        <>

          <h5>New Course
            <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />
          <input
            defaultValue={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            defaultValue={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </>
      )}

      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({showAllCourses || !isStudent ? totalCourses : enrolledCourses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          {theCourses.map((course: any) => {



            return (
              <div className="wd-dashboard-course col" style={{ width: "260px" }} key={course._id}>
                <div className="card rounded-3 overflow-hidden">
                  <img src="/images/neu.png" width="100%" height={160} alt={`${course.name} thumbnail`} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description}
                    </p>

                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                      Go
                    </Link>



                    {isStudent && showAllCourses ? (
                      course.enrolled ? (
                        <button
                          className="btn btn-danger float-end"
                          onClick={() => unenrollFromCourse(course._id)}
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          className="btn btn-success float-end"
                          onClick={() => enrollInCourse(course._id)}
                        >
                          Enroll
                        </button>
                      )
                    ) : !isStudent ? (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}