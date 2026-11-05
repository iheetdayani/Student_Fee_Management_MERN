import mongoose from "mongoose";
const ConnectDb=async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected SuccessFully");
  }catch(error){
    console.log(error.message)
    console.log("Error while connect Database");
  }
}
export default ConnectDb;