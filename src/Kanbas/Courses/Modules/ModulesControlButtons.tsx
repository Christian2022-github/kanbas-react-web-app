import React from "react";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function ModulesControlButtons(
    { moduleId, deleteModule, editModule }:
        { moduleId: string; deleteModule: (moduleId: string) => void; editModule: (moduleId: string) => void }
) {
    const { role } = useSelector((state: any) => state.accountReducer.currentUser);

    return (
        <div className="float-end align-items-center">
            {role === "FACULTY" && (
                <>
                    <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
                    <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)} />
                </>
            )}
            <GreenCheckmark />
            <FaPlus />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
