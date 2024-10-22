import { Link, useLocation, useParams } from "react-router-dom";
export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="rounded-0 wd list-group fs-5 rounded-0">
      <div className="list-group">
        {links.map((link) => (
          <Link
            key={link}
            to={`/Kanbas/Courses/${cid}/${link}`}
            className={`list-group-item text-danger border border-0 ${pathname.includes(link) ? "bg-white text-black  border-black border-start" : ""}`}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}