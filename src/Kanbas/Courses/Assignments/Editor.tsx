import { useParams, Link } from "react-router-dom";
import * as db from "../../Databases";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();


    const assignment = db.assignments.find(
        (assignment) => assignment._id === aid && assignment.course === cid
    );

    const formatDate = (year: number, month: string, day: number) => {

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

        const monthNum = monthMap[month];
        const dayStr = day < 10 ? `0${day}` : day.toString();


        return `${year}-${monthNum}-${dayStr}`;
    };

    if (!assignment) {
        return <div>Assignment not found</div>;
    }
    return (
        <div id="wd-assignments-editor" className="float-end col-10">

            <div className="mb-3">
                <label htmlFor="input1" className="form-label">
                    Assignment Name</label>
                <input type="text" className="form-control"
                    id="wd-name" value={assignment.title} />
            </div>
            <div className="mb-3 ">
                <textarea
                    className="form-control"
                    id="wd-description"
                    rows={3}
                    value={`The assignment is available online.\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n- Your full name and section\n- Links to each of the lab assignments\n- Link to the Kanbas application\n- Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page.`}
                />
            </div>
            <table align="center">
                <tr>
                    <td className="p-3" style={{ textAlign: "end" }}>
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td >
                        <input type="text" className="form-control"
                            id="wd-points" value={assignment.points} />
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
                                <input className="form-control mb-3" type="date" id="wd-due-date" value={formatDate(assignment.dueDateYear, assignment.dueDateMonth, assignment.dueDateDay)} />
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
                                                <input className="form-control mb-3" type="date" id="wd-available-from" value="2024-05-06" />
                                            </td>
                                            <td align="right" valign="top">
                                                <input className="form-control" type="date" id="wd-available-until" value="2024-05-20" />
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
                        <button type="submit" className="btn btn-secondary" >Cancel</button>

                        <button type="submit" className="btn btn-danger">Save</button>
                    </td>
                </tr>
            </table>
        </div>

    );
}
