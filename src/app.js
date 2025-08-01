import express from 'express';

import cookieParser from 'cookie-parser'

const app = express();
import cors from 'cors';// Importing CORS middleware to handle Cross-Origin Resource Sharing


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    creadentials: true
}))
app.use(express.json({limit:"17kb" }))// Limit the size of JSON payloads to 17kb
app.use(express.urlencoded({extended:true,limit:"17kb" }))// Parse URL-encoded bodies with a limit of 17kb
app.use(express.static("public"))// Serve static files from the "public" directory or bahar se ane files ko public folder se serve karega 
app.use(cookieParser())// Parse cookies from incoming requests and make them available in req.cookies 


//routes import 
import { router } from './routes/user.routes.js';


//routes declaration
// middleware for user routes
app.use('/api/v1/user', router);
// All user-related routes will be prefixed with /user agar user se shuru hota hai to usko userRoutes se handle karega. 

// http://localhost:5000/api/v1/user/(register or login or any other user related route) will be handled by userRoutes then it will go to user.controller.js file
export {app} 