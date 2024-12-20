import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Account from "./Account";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { useEffect, useState } from "react";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";




import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

import { useSelector } from "react-redux";



export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);

    const [enrolling, setEnrolling] = useState<boolean>(false);
    const findCoursesForUser = async () => {
        try {
            const courses = await userClient.findCoursesForUser(currentUser._id);
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };
    const updateEnrollment = async (courseId: string, enrolled: boolean) => {
        if (enrolled) {
            await userClient.enrollIntoCourse(currentUser._id, courseId);
        } else {
            await userClient.unenrollFromCourse(currentUser._id, courseId);
        }
        setCourses(
            courses.map((course) => {
                if (course._id === courseId) {
                    return { ...course, enrolled: enrolled };
                } else {
                    return course;
                }
            })
        );
    };

    const fetchCourses = async () => {
        try {
            const allCourses = await courseClient.fetchAllCourses();
            const enrolledCourses = await userClient.findCoursesForUser(
                currentUser._id
            );
            const courses = allCourses.map((course: any) => {
                if (enrolledCourses.find((c: any) => c._id === course._id)) {
                    return { ...course, enrolled: true };
                } else {
                    return course;
                }
            });
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };


    const { currentUser } = useSelector((state: any) => state.accountReducer);


    useEffect(() => {
        if (enrolling) {
            fetchCourses();
        } else {
            findCoursesForUser();
        }
    }, [currentUser, enrolling]);

    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    });


    const addNewCourse = async () => {
        try {
            const newCourse = await courseClient.createCourse(course);
            setCourses(prevCourses => [...prevCourses, newCourse]);

            setCourse({
                _id: "1234",
                name: "New Course",
                number: "New Number",
                startDate: "2023-09-10",
                endDate: "2023-12-15",
                description: "New Description",
            });
        } catch (e) {
            console.error("Error adding new course:", e);
        }
    };

    const findAllCourses = async () => {
        try {
            const courses = await courseClient.fetchAllCourses();
            setCourses(courses);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    useEffect(() => {
        if (currentUser) {
            findAllCourses();
        }
    }, [currentUser]);



    const deleteCourse = async (courseId: string) => {
        const status = await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
    };


    // const deleteCourse = async (courseId: string) => {
    //     const status = await courseClient.deleteCourse(courseId);
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };

    const updateCourse = async () => {

        try {
            await courseClient.updateCourse(course);

            setCourses(
                courses.map((c) => {
                    if (c._id === course._id) {
                        return course;
                    } else {
                        return c;
                    }
                })
            );
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    return (
        <Session>
            <div id="wd-kanbas">
                <KanbasNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="Dashboard" element={
                            <ProtectedRoute>
                                <Dashboard
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                    enrolling={enrolling}
                                    setEnrolling={setEnrolling}
                                    updateEnrollment={updateEnrollment} />
                            </ProtectedRoute>
                        } />
                        <Route path="Courses/:cid/*" element={<ProtectedRoute> <Courses courses={courses} /> </ProtectedRoute>} />

                        <Route path="/Calendar" element={<h2>Calendar</h2>} />
                        <Route path="/Inbox" element={<h2>Inbox</h2>} />
                    </Routes>
                </div >
            </div >
        </Session>
    );
}