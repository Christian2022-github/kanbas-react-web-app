import { CiImport } from "react-icons/ci";
import { LiaFileImportSolid } from "react-icons/lia";
import { BsBarChartFill } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaBell, FaCheckCircle } from "react-icons/fa";
import WhiteCheckmark from "./WhiteCheckMark";
import { MdDoNotDisturbAlt } from "react-icons/md";






export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="d-none d-xxl-block" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div><br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <CiImport className="me-2 fs-5" /> Import Existing Content </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <MdHome className="me-2 fs-5" /> Choose Home Page </button>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BsBarChartFill className="me-2 fs-5" /> View Course Stream </button>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <TfiAnnouncement className="me-2 fs-5" /> New Announcement </button>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BsBarChartFill className="me-2 fs-5" /> New Analytics </button>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaBell className="me-2 fs-5" /> View Course Notifications </button>
      <br />

    </div >
  );
}


// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function CourseStatus() {
//   return (
//     <div id="wd-course-status" className="p-3">
//       <h2>Course Status</h2>
//       <button className="btn btn-secondary mb-2">Unpublish</button>
//       <button className="btn btn-success mb-2">Publish</button>
//       <br />
//       <button className="btn btn-light mb-2">Import Existing Content</button>
//       <br />
//       <button className="btn btn-light mb-2">Import from Commons</button>
//       <br />
//       <button className="btn btn-light mb-2">Choose Home Page</button>
//       <br />
//       <button className="btn btn-light mb-2">View Course Stream</button>
//       <br />
//       <button className="btn btn-light mb-2">New Announcement</button>
//       <br />
//       <button className="btn btn-light mb-2">New Analytics</button>
//       <br />
//       <button className="btn btn-light mb-2">View Course Notifications</button>
//     </div>
//   );
// }
