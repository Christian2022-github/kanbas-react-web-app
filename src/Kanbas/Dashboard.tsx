import { Link } from "react-router-dom";
import * as db from "./Databases/";

export default function Dashboard() {
  const courses = db.courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "260px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <img src="/images/neu.png" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description} </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>);
}




    //       <div className="wd-dashboard-course col" style={{ width: "260px" }}>
    //         <div className="card rounded-3 overflow-hidden">
    //           <Link className="wd-dashboard-course-link text-decoration-none text-dark"
    //             to="/Kanbas/Courses/1234/Home">
    //             <img src="/images/robot.jpg" width="100%" height={160} />
    //             <div className="card-body">
    //               <h5 className="wd-dashboard-course-title card-title">
    //                 EN2342 Engineering
    //               </h5>
    //               <p className="wd-dashboard-course-title card-text">
    //                 Engineering And Human Robots
    //               </p>
    //               <button className="btn btn-primary"> Go </button>
    //             </div>
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="wd-dashboard-course col" style={{ width: "260px" }}>
    //         <div className="card rounded-3 overflow-hidden">
    //           <Link className="wd-dashboard-course-link text-decoration-none text-dark"
    //             to="/Kanbas/Courses/1234/Home">
    //             <img src="/images/boston.jpg" width="100%" height={160} />
    //             <div className="card-body">
    //               <h5 className="wd-dashboard-course-title card-title">
    //                 GEO2321 Location
    //               </h5>
    //               <p className="wd-dashboard-course-title card-text">
    //                 Exploring all of Boston
    //               </p>
    //               <button className="btn btn-primary"> Go </button>
    //             </div>
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="wd-dashboard-course col" style={{ width: "260px" }}>
    //         <div className="card rounded-3 overflow-hidden">
    //           <Link className="wd-dashboard-course-link text-decoration-none text-dark"
    //             to="/Kanbas/Courses/1234/Home">
    //             <img src="/images/celtics.jpg" width="100%" height={160} />
    //             <div className="card-body">
    //               <h5 className="wd-dashboard-course-title card-title">
    //                 SP1234 Celtics
    //               </h5>
    //               <p className="wd-dashboard-course-title card-text">
    //                 The Evolution of the Boston Celtics
    //               </p>
    //               <button className="btn btn-primary"> Go </button>
    //             </div>
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="wd-dashboard-course col" style={{ width: "260px" }}>
    //         <div className="card rounded-3 overflow-hidden">
    //           <Link className="wd-dashboard-course-link text-decoration-none text-dark"
    //             to="/Kanbas/Courses/1234/Home">
    //             <img src="/images/nj.jpg" width="100%" height={160} />
    //             <div className="card-body">
    //               <h5 className="wd-dashboard-course-title card-title">
    //                 GEO2221 Location
    //               </h5>
    //               <p className="wd-dashboard-course-title card-text">
    //                 Exploring New Jersey
    //               </p>
    //               <button className="btn btn-primary"> Go </button>
    //             </div>
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="wd-dashboard-course col" style={{ width: "260px" }}>
    //         <div className="card rounded-3 overflow-hidden">
    //           <Link className="wd-dashboard-course-link text-decoration-none text-dark"
    //             to="/Kanbas/Courses/1234/Home">
    //             <img src="/images/sf.jpg" width="100%" height={160} />
    //             <div className="card-body">
    //               <h5 className="wd-dashboard-course-title card-title">
    //                 GEO4550 Location
    //               </h5>
    //               <p className="wd-dashboard-course-title card-text">
    //                 Exploring San Francisco
    //               </p>
    //               <button className="btn btn-primary"> Go </button>
    //             </div>
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="wd-dashboard-course col" style={{ width: "260px" }}>
    //         <div className="card rounded-3 overflow-hidden">
    //           <Link className="wd-dashboard-course-link text-decoration-none text-dark"
    //             to="/Kanbas/Courses/1234/Home">
    //             <img src="/images/typescript.jpg" width="100%" height={160} />
    //             <div className="card-body">
    //               <h5 className="wd-dashboard-course-title card-title">
    //                 CS4550 Typescript
    //               </h5>
    //               <p className="wd-dashboard-course-title card-text">
    //                 Learning TypeScript
    //               </p>
    //               <button className="btn btn-primary"> Go </button>
    //             </div>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// }

