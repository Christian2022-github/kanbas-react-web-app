import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { updateAssignment } from "./reducer";
import { addAssignment } from "./reducer";
import * as db from "../../Databases";

export default function AssignmentEditor(
) {
    const { cid, aid } = useParams();
    const location = useLocation();
    const isNewAssignment = (aid === "AssignmentEditor");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const assignments = useSelector((state: any) => state.assignmentReducer);


    const [assignment2, setAssignment2] = useState<any>({});

    const [availableDateMonth, setAvailableDateMonth] = useState(assignment2.availableDateMonth || "");
    const [availableDateDay, setAvailableDateDay] = useState(assignment2.availableDateMonth || "");
    const [availableDateYear, setAvailableDateYear] = useState(assignment2.availableDateMonth || "");
    const [untilDateMonth, setUntilDateMonth] = useState(assignment2.availableDateMonth || "");
    const [untilDateDay, setUntilDateDay] = useState(assignment2.availableDateMonth || "");
    const [untilDateYear, setUntilDateYear] = useState(assignment2.availableDateMonth || "");
    const [dueDateMonth, setDueDateMonth] = useState(assignment2.availableDateMonth || "");
    const [dueDateDay, setDueDateDay] = useState(assignment2.availableDateMonth || "");
    const [dueDateYear, setDueDateYear] = useState(assignment2.availableDateMonth || "");



    const handleSave = () => {
        if (!isNewAssignment) {
            dispatch(updateAssignment(assignment2));
        } else {
            dispatch(addAssignment(assignment2));
        }

        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };


    const formatDate = (year: string, month: string, day: string) => {
        const monthMap: { [key: string]: string } = {
            January: "01",
            February: "02",
            March: "03",
            April: "04",
            May: "05",
            June: "06",
            July: "07",
            August: "08",
            September: "09",
            October: "10",
            November: "11",
            December: "12",
        };

        const monthNum = monthMap[month] || "01";
        const dayStr = day ? (parseInt(day) < 10 ? `0${day}` : day) : "01";
        const yearStr = year || "2023";

        return `${yearStr}-${monthNum}-${dayStr}`;
    };

    const handleDateChange = (
        setYear: (year: string) => void,
        setMonth: (month: string) => void,
        setDay: (day: string) => void
    ) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const [year, month, day] = e.target.value.split("-");
        setYear(year);
        setMonth(month);
        setDay(day);
    };

    const monthMap: { [key: string]: string } = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December",
    };

    const handleDueDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const [month, day, year] = e.target.value.split("/");

        if (month && day && year) {
            setAssignment2({
                ...assignment2,
                dueDateMonth: monthMap[month] || "",
                dueDateDay: parseInt(day, 10), // Convert day to number
                dueDateYear: parseInt(year, 10) // Convert year to number
            });
        }
    };


    useEffect(() => {
        if (aid === "AssignmentEditor") {
            setAssignment2({
                title: "New Assignment",
                description: "New Description",
                points: "0",
            });
        } else {
            const a = db.assignments.find((assignment) => assignment._id === aid);
            setAssignment2(a);
        }
    }, [aid]);

    return (
        <div id="wd-assignments-editor" className="float-end col-10">

            <div className="mb-3">
                <label htmlFor="input1" className="form-label">
                    Assignment Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="wd-name"
                    defaultValue={assignment2.title}
                    onChange={(e) => setAssignment2({ ...assignment2, title: e.target.value })} />
            </div>
            <div className="mb-3 ">
                <textarea
                    className="form-control"
                    id="wd-description"
                    rows={3}
                    defaultValue={assignment2.description}
                    onChange={(e) => setAssignment2({ ...assignment2, description: e.target.value })} />
            </div>
            <table align="center">
                <tr>
                    <td className="p-3" style={{ textAlign: "end" }}>
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td >
                        <input type="text" className="form-control"
                            id="wd-points" defaultValue={assignment2.points}
                            onChange={(e) => setAssignment2({ ...assignment2, points: e.target.value })} />
                    </td>
                </tr>
                <tr>
                    <td className="p-3" style={{ textAlign: "end" }}>
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <div id="wd-css-styling-dropdowns">
                            <select className="form-select" id="wd-group" defaultValue="ASSIGNMENTS">
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            </select>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td className="p-3" style={{ textAlign: "end" }} >
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <div id="wd-css-styling-dropdowns">
                            <select className="form-select" id="wd-display-grade-as" defaultValue="Percentage">
                                <option value="Percentage">Percentage</option>
                                <option value="Points">Points</option>
                            </select>
                        </div>
                    </td>
                </tr>

                <tr className="mb-9" >
                    <td className="pe-3 pb-3" style={{ verticalAlign: "top", textAlign: "end" }}>
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <div className="border border-2 rounded-3 p-3 pt-8">
                            <div id="wd-css-styling-dropdowns">
                                <select className="form-select" id="wd-submission-type" defaultValue="Online">
                                    <option value="Online">Online</option>
                                    <option value="In-Person">In-Person</option>
                                </select>
                            </div>
                            <div className="p-2 ">
                                <div>
                                    <label className="pt-2 pb-2"><h6><b>Online Entry Options</b></h6></label>
                                </div>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                                    <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                                </div>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" id="wd-website-url" />
                                    <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                                </div>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                                    <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                                </div>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                                    <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                                </div>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                                    <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>



                <tr style={{ paddingTop: "15px" }}>
                    <td className="pe-3 " style={{ verticalAlign: "top", textAlign: "end" }}>
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <div className="border border-2 rounded-3 p-3 pt-6">
                            <div>
                                <label><h6><b>Assign to</b></h6></label>
                                <input type="text" className="form-control mb-3" id="wd-assign-to" value="Everyone" />
                            </div>

                            <label htmlFor="wd-due-date"><b>Due</b></label>
                            <div className="input-group">
                                <input className="form-control mb-3" type="date" id="wd-due-date"
                                    defaultValue={formatDate(dueDateYear, dueDateMonth, dueDateDay)}
                                    onChange={handleDueDateChange}
                                />
                            </div>


                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td align="left" valign="top">
                                                <label htmlFor="wd-available-from"><b>Available from</b></label>
                                            </td>
                                            <td align="left" valign="top">
                                                <label htmlFor="wd-available-until"><b>Until</b></label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" valign="top">
                                                <input className="form-control mb-3"
                                                    type="date"
                                                    id="wd-available-from"
                                                    defaultValue={formatDate(availableDateYear, availableDateMonth, availableDateDay)}
                                                    onChange={handleDateChange(setAvailableDateYear, setAvailableDateMonth, setAvailableDateDay)} />
                                            </td>
                                            <td align="right" valign="top">
                                                <input className="form-control"
                                                    type="date"
                                                    id="wd-available-until"
                                                    defaultValue={formatDate(untilDateYear, untilDateMonth, untilDateDay)}
                                                    onChange={handleDateChange(setUntilDateYear, setUntilDateMonth, setUntilDateDay)} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </td>
                </tr>

            </table>

            < hr />
            <table align="right">
                <tr >
                    <td valign="top">
                        <button type="submit" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>

                        <button type="submit" className="btn btn-danger" onClick={handleSave} >Save </button>
                    </td>
                </tr>
            </table>
        </div>

    );
}
