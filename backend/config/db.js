import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sriramt234:SRIRAM1234@backendb.h3v58.mongodb.net/?retryWrites=true&w=majority&appName=BACKENDB').then(()=>console.log("DataBase Connected"));
}