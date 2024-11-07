import { useSelector } from "react-redux";
import Modules from "../Modules";
import CourseStatus from "./Status";


export default function Home() {
  const { role } = useSelector((state: any) => state.accountReducer.currentUser);


  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
        <Modules />
      </div>
      <div className="d-none d-md-block pl-20" style={{ paddingLeft: "20px" }}>
        {role === "FACULTY" && (<CourseStatus />)}
      </div>
    </div>
  );
}
