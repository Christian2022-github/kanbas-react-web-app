import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { enroll, unenroll } from "./Courses/Enrollments/reducer";
import * as db from "../Kanbas/Databases";

export default function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }) {




  const dispatch = useDispatch();

  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const isNotFaculty = currentUser.role !== "FACULTY";

  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);


  const enrolledCourses = courses.filter(course =>
    enrollments.some((enrollment: { user: any; course: any; }) =>
      enrollment.user === currentUser._id && enrollment.course === course._id
    )
  );

  const [showAllCourses, setShowAllCourses] = useState(false);
  const handleToggleCourses = () => {
    setShowAllCourses(!showAllCourses);
  };

  const handleEnroll = (courseId: string) => {
    const enrollment = {
      course: courseId,
      user: currentUser._id
    }
    dispatch(enroll(enrollment));
  };

  const handleUnenroll = (courseId: string) => {
    const enrollment = {
      course: courseId,
      user: currentUser._id
    }
    dispatch(unenroll(enrollment));
  };





  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />


      {isNotFaculty ? (
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
            <button className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </>
      )}

      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({showAllCourses ? courses.length : enrolledCourses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {(showAllCourses ? courses : enrolledCourses).map((course) => {
            const isEnrolled = enrollments.some((enrollment: { user: any; course: any; }) =>
              enrollment.user === currentUser._id && enrollment.course === course._id
            );

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

                    {isNotFaculty ? (
                      isEnrolled ? (
                        <button
                          className="btn btn-danger float-end"
                          onClick={() => handleUnenroll(course._id)}
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          className="btn btn-success float-end"
                          onClick={() => handleEnroll(course._id)}
                        >
                          Enroll
                        </button>
                      )
                    ) : (
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
                    )}
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