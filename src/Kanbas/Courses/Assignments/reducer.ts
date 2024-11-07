import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Databases";


const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
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

            state.assignments = [...state.assignments, newAssignment];
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
            );
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentId ? { ...a, editing: true } : a
            );
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;
