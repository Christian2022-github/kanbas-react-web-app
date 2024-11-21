import { createSlice } from "@reduxjs/toolkit";
import { courses as initialCourses } from "../Databases";

const initialState = {
    courses: [],
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {

        setCourses: (state, action) => {
            state.courses = action.payload;
        },

    },
});

export const { setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
