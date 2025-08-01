import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js';


const connectDB=async()=>{
    try{
        const connectInstance =await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected: !! DB Host:${connectInstance.connection.host}`);
        console.log("Running on port: ", process.env.PORT || 8000);
    }
    catch(error){
        console.log("Error connecting to the database:", error);
        // throw error
        process.exit(1)//process is the reference to the current Node.js process
    }
} 
export default connectDB