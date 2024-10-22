import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";


export default function AssignmentControlButtons() {
    return (
        <div className="float-end align-items-center ">
            <span className="wd-rounded-corners-all-around 
     wd-border-thin border-dark-subtle wd-border-solid px-2
     ">40% of Total </span>  <FaPlus /> <IoEllipsisVertical className="fs-4" />
        </div>
    )
}
