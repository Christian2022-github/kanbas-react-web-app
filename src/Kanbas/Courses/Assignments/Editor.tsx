export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <h4>
                <label htmlFor="wd-name">Assignment Name</label>
            </h4>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, links to each of the lab assignments, a link to the Kanbas application, links to all relevant source code repositories, and a link to navigate back to the landing page.
            </textarea>
            <br />
            <table align="center">
                <tr>
                    <td >
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td >
                        <input id="wd-points" value={100} />
                    </td>
                </tr>

                <tr>
                    <td >
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group" defaultValue="ASSIGNMENTS">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td >
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as" defaultValue="Percentage">
                            <option value="Percentage">Percentage</option>
                            <option value="Points">Points</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td >
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type" defaultValue="Online">
                            <option value="Online">Online</option>
                            <option value="In-Person">In-Person</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td >
                        <label>Online Entry Options</label>
                    </td>
                    <td>
                        <input type="checkbox" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label><br />
                    </td>
                </tr>

                <tr>
                    <td >
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td>
                        <input type="date" id="wd-due-date" value="2024-05-13" />
                    </td>
                </tr>

                <table>	{/* table, border, width */}
                    <tbody>					{/* table body */}
                        <tr>						{/* table row */}
                            <td align="left" valign="top">
                                <label htmlFor="wd-available-from">Available from</label>
                            </td>
                            <td align="left" valign="top">
                                <label htmlFor="wd-available-until">Until</label>
                            </td>
                        </tr>
                        <tr>

                            <td align="left" valign="top">
                                <input type="date" id="wd-available-from" value="2024-05-06" />
                            </td>
                            <td align="right" valign="top">
                                <input type="date" id="wd-available-until" value="2024-05-20" />
                            </td>

                        </tr>
                    </tbody>
                </table>
            </table>

            < hr />
            <table align="right">
                <tr >
                    <td valign="top">
                        <button>Cancel</button>

                        <button>Save</button>
                    </td>
                </tr>
            </table>

        </div>
    );
}
