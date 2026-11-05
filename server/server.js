import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDb from "./Config/db.js";
import StudentRoutes from "./Routes/StudentRoutes.js"
dotenv.config();
ConnectDb();
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/Students",StudentRoutes);
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
  console.log(`Server is Running On ${PORT}`);
});