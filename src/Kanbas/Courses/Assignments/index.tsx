import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModulesControlButtons from "../Modules/ModulesControlButtons";
import AssignmentContorls from "./AssignmentControls";
import AssignmentIcon from "./AssignmentIcon";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router";
import * as db from "../../Databases";


export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
        <div>
            <div>
                <div className="d-flex justify-content-between align-items-center">
                    <input
                        className="col-4"
                        id="wd-search-assignment"
                        placeholder="🔍Search..."
                    />
                    <AssignmentContorls />
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
                            {assignments
                                .filter((assignment: any) => assignment.course === cid)
                                .map((assignment: any) => (
                                    <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <BsGripVertical className="me-2 fs-3" />
                                            <AssignmentIcon />
                                            <div>
                                                <Link className="wd-assignment-link list-group-item text-black border border-0 p-0 mb-0 fs-3"
                                                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                                    <h4><b>{assignment.title}</b></h4>
                                                </Link>
                                                <p className="mb-0">
                                                    <span className="text-danger"> Multiple Modules</span> | <b>Not available until</b> {assignment.availableDateMonth} {assignment.availableDateDay} at {assignment.availableDateTime} |
                                                </p>
                                                <p className="mb-0">
                                                    <b>Due</b> {assignment.dueDateMonth} {assignment.dueDateDay} at {assignment.dueDateTime} | {assignment.points} pts
                                                </p>
                                            </div>
                                        </div>
                                        <LessonControlButtons />
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

    );
}
