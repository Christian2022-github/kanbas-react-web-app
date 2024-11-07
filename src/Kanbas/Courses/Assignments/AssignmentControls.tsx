import { FaPlus } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router";

export default function AssignmentControls() {
    const navigate = useNavigate();
    const { cid } = useParams();

    const handleAddAssignmentClick = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments/AssignmentEditor`, {
            state: { isNewAssignment: true },
        });
    };

    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <button id="wd-add-module-btn"
                className="btn btn-lg btn-danger me-1 float-end"
                onClick={handleAddAssignmentClick}>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button>
            <button id="wd-view-progress" className="btn btn-lg btn-secondary text-black me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>
        </div>
    );
}
