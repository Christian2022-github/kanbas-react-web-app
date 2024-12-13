import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const axiosWithCredentials = axios.create({ withCredentials: true });
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;



export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials
        .get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};

export const fetchAllAssingments = async () => {
    const { data } = await axiosWithCredentials.get(ASSIGNMENTS_API);
    return data;
};

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axiosWithCredentials.post(
        `${COURSES_API}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};


export const updateAssignment = async (assignment: any) => {
    const { data } = await axiosWithCredentials.put(
        `${ASSIGNMENTS_API}/${assignment._id}`,
        assignment
    );
    return data;
};



export const deleteAssignment = async (assignmentId: string) => {
    await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
};

export const fetchAssignment = async (assignmentId: string) => {
    const response = await axios.get(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
};


