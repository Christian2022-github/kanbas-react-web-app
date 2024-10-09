// import { Link } from "react-router-dom";
// export default function KanbasNavigation() {
//   return (
//     <div className="position-fixed top-0 bottom-0 d-md-block z-2 bg-black" id="wd-kanbas-navigation">
//       <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br />
//       <Link to="/Kanbas/Account" id="wd-account-link">Account</Link><br />
//       <Link to="/Kanbas/Dashboard" id="wd-dashboard-link">Dashboard</Link><br />
//       <Link to="/Kanbas/Dashboard" id="wd-course-link">Courses</Link><br />
//       <Link to="/Kanbas/Calendar" id="wd-calendar-link">Calendar</Link><br />
//       <Link to="/Kanbas/Inbox" id="wd-inbox-link">Inbox</Link><br />
//       <Link to="/Labs" id="wd-labs-link">Labs</Link><br />
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { LuInbox } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";





export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 120, position: "fixed" }}
      className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black text-center border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></a><br />
      <Link to="/Kanbas/Account" id="wd-account-link"
        className="list-group-item active text-center border-0 bg-black text-white">
        <FaRegCircleUser className="fs-1 text-center text-white" /><br />
        Account </Link><br />
      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className="list-group-item active text-center border-0
                   bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-center text-danger" /><br />
        Dashboard </Link><br />
      <Link to="/Kanbas/Courses" id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-center text-danger" /><br />
        Courses </Link><br />
      <Link to="/Kanbas/Calendar" id="wd-calendar-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <IoCalendarOutline className="fs-1 text-center text-danger" /><br />
        Calendar </Link><br />
      <Link to="/Kanbas/Inbox" id="wd-inbox-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <LuInbox className="fs-1 text-center text-danger" /><br />
        Inbox </Link><br />
      <Link to="/Labs" id="wd-labs-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <IoSettingsOutline className="fs-1 text-center text-danger" /><br />
        Labs </Link><br />
    </div>
  );
}
