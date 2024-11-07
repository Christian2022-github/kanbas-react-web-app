import { createSlice } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "../../Databases";

const initialState = {
    enrollments: initialEnrollments,
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        unenroll: (state, { payload: enrollment }) => {
            state.enrollments = state.enrollments.filter(
                (e) => !(e.course === enrollment.course && e.user === enrollment.user)
            );
        },

        enroll: (state, { payload: enrollment }) => {
            state.enrollments = [
                ...state.enrollments,
                {
                    _id: new Date().getTime().toString(),
                    user: enrollment.user,
                    course: enrollment.course,
                },
            ];
        },
    },
});

export const { unenroll, enroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
