import StudentFee from "../Models/Student.js";
const createStudent=async(req,res)=>{
  try{
    const data=await StudentFee.create(req.body);
    res.status(201).json({
      data:data,
      message:"Student Created SuccessFully"
    })
  }catch(error){
    res.status(400).json({
      error:error.message,
      message:"Error While create Student"
    })
  }
}
const GetAllStudentFee=async(req,res)=>{
  try{
    const data=await StudentFee.find();
    res.status(200).json({
      data:data,
      message:"Student Fetched SuccessFully"
    })
  }catch(error){
    res.status(400).json({
      error:error.message,
      message:"Error While Fetch Student"
    })
  }
}
const GetAllStudentFeeById=async(req,res)=>{
  try{
    const data=await StudentFee.findById(req.params.id);
    res.status(200).json({
      data:data,
      message:"Student Fetched SuccessFully By Their Id"
    })
  }catch(error){
    res.status(400).json({
      error:error.message,
      message:"Error While Fetch Student By Their Id"
    })
  }
}
export {createStudent,GetAllStudentFee,GetAllStudentFeeById}

