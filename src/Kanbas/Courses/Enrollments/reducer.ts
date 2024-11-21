import { createSlice } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "../../Databases";

const initialState = {
    enrollments: [],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {

        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },

        unenroll: (state, { payload: enrollment }) => {


            state.enrollments = state.enrollments.filter(
                (e: any) => (e.course === enrollment.course && e.user === enrollment.user)
            );
            console.log(state.enrollments);
        },

        enroll: (state, { payload: enrollment }) => {
            state.enrollments = [
                ...state.enrollments,
                {
                    _id: new Date().getTime().toString(),
                    user: enrollment.user,
                    course: enrollment.course,
                },
            ] as any;
        },
    },
});

export const { unenroll, enroll, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
