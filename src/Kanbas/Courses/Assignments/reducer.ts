import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Databases";


const initialState = {
    assignments: [],
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {

        setModules: (state, action) => {
            state.assignments = action.payload;
        },

        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
                description: assignment.description,
                points: assignment.points,

                availableDateMonth: assignment.availableDateMonth,
                availableDateDay: assignment.availableDateDay,
                availableDateYear: assignment.availableDateYear,

                untilDateMonth: assignment.untilDateMonth,
                untilDateDay: assignment.untilDateDay,
                untilDateYear: assignment.untilDateYear,

                dueDateMonth: assignment.dueDateMonth,
                dueDateDay: assignment.dueDateDay,
                dueDateYear: assignment.dueDateYear,

            };

            state.assignments = [...state.assignments, newAssignment] as any;
            console.log(state.assignments);
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId
            );
        },
        updateAssignment: (state, { payload: assignment }) => {
            console.log('update')
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentId ? { ...a, editing: true } : a
            ) as any;
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setModules } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;
