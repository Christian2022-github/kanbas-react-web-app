// import AssignmentContorls from "./AssignmentControls";
// import AssignmentEditor from "./Editor";
// import { CiSearch } from "react-icons/ci";


// export default function Assignments() {
//     return (

//         <div id="wd-assignments">

//             <div className="search-container">
//                 <input
//                     id="wd-search-assignment"
//                     placeholder="🔍Search..."
//                 /> <AssignmentContorls />

//             </div>


//             <button id="wd-add-assignment-group">+ Group</button>
//             <button id="wd-add-assignment">+ Assignment</button>
//             <h3 id="wd-assignments-title">
//                 ASSIGNMENTS 40% of Total <button>+</button>
//             </h3>
//             <ul id="wd-assignment-list">
//                 <li className="wd-assignment-list-item">
//                     <a className="wd-assignment-link"
//                         href="#/Kanbas/Courses/1234/Assignments/123">
//                         A1 - ENV + HTML
//                     </a>
//                     <p> Multiple Modules | Not available until May 6 at 12:00 am | Due May 13 at 11:59pm | 100 pts</p>
//                 </li>
//                 <li className="wd-assignment-list-item">
//                     <a className="wd-assignment-link"
//                         href="#/Kanbas/Courses/1234/Assignments/123">
//                         A2 - CSS + BOOTSTRAP
//                     </a>
//                     <p> Multiple Modules | Not available until May 13 at 12:00 am | Due May 20 at 11:59pm | 100 pts</p>

//                 </li>
//                 <li className="wd-assignment-list-item">
//                     <a className="wd-assignment-link"
//                         href="#/Kanbas/Courses/1234/Assignments/123">
//                         A3 - JAVASCRIPT + REACT
//                     </a>
//                     <p> Multiple Modules | Not available until May 20 at 12:00 am | Due May 27 at 11:59pm | 100 pts</p>

//                 </li>
//             </ul>
//         </div >
//     );
// }



import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModulesControlButtons from "../Modules/ModulesControlButtons";
import AssignmentContorls from "./AssignmentControls";
import AssignmentIcon from "./AssignmentIcon";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";
import AssignmentControlButtons from "./AssignmentControlButtons";

// import LessonControlButtons from "./LessonControlButtons";
// import ModulesControlButtons from "./ModulesControlButtons";
// import ModulesControls from "./ModulesControls";

export default function Assignments() {
    return (
        <div>
            <div>
                <div className="d-flex justify-content-between align-items-center">
                    <input
                        className="col-4"
                        id="wd-search-assignment"
                        placeholder="🔍Search..."
                    />
                    <AssignmentContorls />
                </div>

                <br />
                <ul id="wd-assignment-list" className="list-group rounded-0">
                    <li className="wd-assignment-list list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-assignments-title p-3 ps-2 bg-secondary ">
                            <BsGripVertical className="me-2 fs-3 text-center" />
                            <TiArrowSortedDown className="me-2" /><b> ASSIGNMENTS</b>
                            <AssignmentControlButtons />
                        </div>

                        <ul className="wd-assignment-list-item list-group rounded-0">
                            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <AssignmentIcon />
                                    <div>
                                        <a className="wd-assignment-link list-group-item text-black border border-0 p-0 mb-0 fs-3"
                                            href="#/Kanbas/Courses/1234/Assignments/123">
                                            <h4><b>A1</b></h4>
                                        </a>
                                        <p className="mb-0">
                                            <span className="text-danger"> Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00 am |
                                        </p>
                                        <p className="mb-0">
                                            <b>Due</b> May 13 at 11:59pm | 100 pts
                                        </p>
                                    </div>
                                </div>
                                <LessonControlButtons />
                            </li>
                            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <AssignmentIcon />
                                    <div>
                                        <a className="wd-assignment-link list-group-item text-black border border-0 p-0 mb-0"
                                            href="#/Kanbas/Courses/1234/Assignments/123">
                                            <h4><b>A2</b></h4>
                                        </a>
                                        {/* CSS + BOOTSTRAP */}
                                        <p className="mb-0 ">
                                            <span className="text-danger"> Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00 am |
                                        </p>
                                        <p className="mb-0 ">
                                            <b>Due</b> May 20 at 11:59pm | 100 pts
                                        </p>
                                    </div>
                                </div>
                                <LessonControlButtons />
                            </li>
                            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <AssignmentIcon />
                                    <div>
                                        <a className="wd-assignment-link list-group-item text-black border border-0 p-0 mb-0"
                                            href="#/Kanbas/Courses/1234/Assignments/123">
                                            <h4><b>A3</b></h4>
                                        </a>
                                        {/* JAVASCRIPT + REACT */}
                                        <p className="mb-0 ">
                                            <span className="text-danger"> Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00 am |
                                        </p>
                                        <p className="mb-0">
                                            <b>Due</b> May 27 at 11:59pm | 100 pts
                                        </p>
                                    </div>
                                </div>
                                <LessonControlButtons />
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="btn-group">
                <button>Collapse All</button>
                <button>View Progress</button>
                <select id="wd-select-one-genre">
                    <option selected value="Publish All">Publish All</option>
                    <option value="Publish All Modules and Items">Publish all modules and items</option>
                    <option value="Publish Modules Only">Publish modules only</option>
                    <option value="Unpublish All Modules and Items">Unpublish all modules and items</option>
                    <option value="Unpublish Modules Only">Unpublish modules away</option>
                </select>

                <button>+ Module</button>
            </div>

            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">READING</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Creating User</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Web Development</li>
                                <li className="wd-content-item">Creating a HTTP server with Node.js</li>
                                <li className="wd-content-item">Creating a React application</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                                <li className="wd-content-item">Deploy the assignment to Netlify</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                                <li className="wd-content-item">Formatting Web content with Headings and</li>
                                <li className="wd-content-item">Formating content with Lists and Tables</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
