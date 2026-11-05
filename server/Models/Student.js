import mongoose from "mongoose";
const StudentFeeSchema=new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  semester: {
    type: Number,
    required: true
  },
  tuitionFee: {
    type: Number,
    required: true
  },
  examFee: {
    type: Number,
    required: true
  },
  scholarship: {
    type: Number,
    required: true
  },
  lateDays: {
    type: Number,
    required: true
  }
});
const StudentFee=mongoose.model("StudentsFee",StudentFeeSchema);

export default StudentFee;