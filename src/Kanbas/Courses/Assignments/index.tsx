import React, { useEffect, useState } from "react";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModulesControlButtons from "../Modules/ModulesControlButtons";
import AssignmentContorls from "./AssignmentControls";
import AssignmentIcon from "./AssignmentIcon";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router";
import { CiTrash } from "react-icons/ci";
import * as db from "../../Databases";
import * as assignmentsClient from "../Assignments/client";

import { setAssignments, deleteAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";

export default function Assignments() {
    const { cid, aid } = useParams();
    const dispatch = useDispatch();



    const fetchModules = async () => {
        const modules = await assignmentsClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(modules));
    };
    useEffect(() => {
        fetchModules();
    }, []);


    // const [assignments, setAssignments] = useState(db.assignments.filter((assignment) => assignment.course === cid));

    const assignments = useSelector(
        (state: any) => state.assignmentReducer
    ).assignments;

    const removeAssignment = async (assignmentId: string) => {
        try {
            await assignmentsClient.deleteAssignment(assignmentId);
            dispatch(deleteAssignment(assignmentId));
        } catch (error) {
            console.error("Failed to delete assignment:", error);
        }
    };

    const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);
    const { role } = useSelector((state: any) => state.accountReducer.currentUser);

    // const handleDelete = (assignmentId: string) => {
    //     dispatch(deleteAssignment(assignmentId));
    //     // setAssignments(assignments.filter((assignment) => assignment._id !== assignmentId));
    //     setAssignmentToDelete(null);
    // };

    const deleteA = async () => {
        if (assignmentToDelete) {
            await removeAssignment(assignmentToDelete);
            setAssignmentToDelete(null);
        }
    };



    return (
        <div>
            <div>
                <div className="d-flex justify-content-between align-items-center">
                    <input
                        className="col-4"
                        id="wd-search-assignment"
                        placeholder="🔍Search..."
                    />

                    {role === "FACULTY" && (<AssignmentContorls />)}
                </div>

                <br />
                <ul id="wd-assignment-list" className="list-group rounded-0">
                    <li className="wd-assignment-list list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-assignments-title p-3 ps-2 bg-secondary ">
                            <BsGripVertical className="me-2 fs-3 text-center" />
                            <TiArrowSortedDown className="me-2" /><b> ASSIGNMENTS</b>
                            <AssignmentControlButtons />
                        </div>

                        <ul className="wd-assignment-list-item list-group rounded-0">
                            {assignments.map((assignment: any) => (
                                <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <AssignmentIcon />
                                        <div>
                                            {role === "FACULTY" ? (
                                                <Link
                                                    className="wd-assignment-link list-group-item text-black border border-0 p-0 mb-0 fs-3"
                                                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}

                                                >
                                                    <h4><b>{assignment.title}</b></h4>
                                                </Link>
                                            ) : (
                                                <div className="wd-assignment-link list-group-item text-black border border-0 p-0 mb-0 fs-3">
                                                    <h4><b>{assignment.title}</b></h4>
                                                </div>
                                            )}

                                            <p className="mb-0">
                                                <span className="text-danger"> Multiple Modules</span> | <b>Not available until</b> {assignment.availableDateMonth} {assignment.availableDateDay} at 12:00 am |
                                            </p>
                                            <p className="mb-0">
                                                <b>Due</b> {assignment.dueDateMonth} {assignment.dueDateDay} at 12:00 am | {assignment.points} pts
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                         {role === "FACULTY" && ( 
                                            <button type="button" data-bs-toggle="modal" data-bs-target={`#deleteModal-${assignment._id}`} onClick={() => setAssignmentToDelete(assignment._id)}>
                                                <CiTrash />
                                            </button>
                                         )}
                                        <LessonControlButtons />
                                    </div>

                                    <div className="modal fade" id={`deleteModal-${assignment._id}`} data-bs-backdrop="static" data-bs-keyboard="false" tab-Index="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="deleteModalLabel">Continue?</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setAssignmentToDelete(null)}></button>
                                                </div>
                                                <div className="modal-body">
                                                    Are you sure you want to delete this assignment?
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setAssignmentToDelete(null)}>No</button>
                                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => deleteA()}>Yes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
