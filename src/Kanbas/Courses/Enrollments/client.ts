import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const findEnrollmentsFromUser = async (userId: string) => {
    const response = await axios.get(`${ENROLLMENTS_API}/${userId}`);
    return response.data;
};



export const enrollUserInCourse = async (user: string, course: string) => {
    const response = await axios.post(ENROLLMENTS_API, { user, course });
    return response.data;
};


export const unenrollUserInCourse = async (user: string, course: string) => {
    console.log("Hi");
    await axios.delete(ENROLLMENTS_API, { data: { user, course } });
};

