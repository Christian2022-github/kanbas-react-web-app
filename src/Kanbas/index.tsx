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
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async () => {
        let courses = [];
        try {
            courses = await userClient.findMyCourses();
        } catch (error) {
            console.error(error);
        }
        setCourses(courses);
    };
    useEffect(() => {
        fetchCourses();
    }, [currentUser]);

    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    });


    const addNewCourse = async () => {


        const newCourse = await userClient.createCourse(course);
        setCourses([...courses, newCourse]);

        setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
        console.log(courses)
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

    const updateCourse = async () => {
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
                                    updateCourse={updateCourse} />
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