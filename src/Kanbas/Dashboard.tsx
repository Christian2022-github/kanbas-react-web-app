import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/teslabot.jpg" width={200} />
            <div>
              <h5>
                ENG113 Automation
              </h5>
              <p className="wd-dashboard-course-title">
                Automation in Tesla
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/boston.jpg" width={200} />
            <div>
              <h5>
                GEO2321 Location
              </h5>
              <p className="wd-dashboard-course-title">
                Exploring all of Boston
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/celtics.jpg" width={200} />
            <div>
              <h5>
                SP1234 Celtics
              </h5>
              <p className="wd-dashboard-course-title">
                The evolution of the Boston Celtics
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/nj.jpg" width={200} />
            <div>
              <h5>
                GEO2221 Location
              </h5>
              <p className="wd-dashboard-course-title">
                Exploring New Jersey
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/sf.jpg" width={200} />
            <div>
              <h5>
                GEO4550 Location
              </h5>
              <p className="wd-dashboard-course-title">
                Exploring San Francisco
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/typescript.jpg" width={200} />
            <div>
              <h5>
                CS4550 Typescript
              </h5>
              <p className="wd-dashboard-course-title">
                Learning TypeScript
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

