import dotenv from 'dotenv'
dotenv.config()

import mongoose from "mongoose"


const DB_URL = process.env.DATABASE
const DBConnection = async ()=>{
    try {
        await mongoose.connect(DB_URL);
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error while connection with the data base", error.message)
    }
}

export default DBConnection;