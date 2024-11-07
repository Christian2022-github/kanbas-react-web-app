import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Account from "./Account";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import * as db from "../Kanbas/Databases";
import { useState } from "react";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";



export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>(db.courses);
    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    });


    const addNewCourse = () => {

        setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
        console.log(courses)
    };


    const deleteCourse = (courseId: string) => {

        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
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
    );
}