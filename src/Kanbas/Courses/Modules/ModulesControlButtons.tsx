import React from "react";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControlButtons() {
    return (
        <div className="float-end align-items-center ">
            <GreenCheckmark />  <FaPlus /> <IoEllipsisVertical className="fs-4" />
        </div>
    )
}
