import axios from "axios";

const API_URL="http://localhost:5015/api/Students"

export const createStudent=async(student)=>{
  const response=await axios.post(API_URL,student);
  return response.data;
}
export const GetAllStudents=async()=>{
  const response=await axios.get(API_URL);
  return response.data;
}
export const GetAllStudentsById=async(id)=>{
  const response=await axios.get(`${API_URL}/${id}`);
  return response.data;
}