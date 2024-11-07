// src/Kanbas/Account/ProtectedRoute.tsx
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

type Enrollment = {
    user: string;
    course: string;
};


export default function ProtectedRoute({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { courseId } = useParams();
    const enrollments = useSelector((state: any) => state.enrollmentReducer) as Enrollment[];

    if (!currentUser) {
        return <Navigate to="/Kanbas/Account/Signin" />;
    }

    if (courseId) {
        const isEnrolled = enrollments.some(
            (enrollment) =>
                enrollment.user === currentUser._id && enrollment.course === courseId
        );

        if (!isEnrolled) {
            return <Navigate to="/Kanbas/Dashboard" />;
        }
    }

    return children;
}
