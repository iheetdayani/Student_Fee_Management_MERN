import express from "express";
import { createStudent,GetAllStudentFee,GetAllStudentFeeById } from "../Controller/StudentFeeController.js";
const router=express.Router();

router.get("/",GetAllStudentFee);

router.get("/:id",GetAllStudentFeeById);

router.post("/",createStudent);

export default router;