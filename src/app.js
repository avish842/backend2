import express from 'express';

import cookieParser from 'cookie-parser'

const app = express();


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    creadentials: true
}))
app.use(express.json({limit:"17kb" }))// Limit the size of JSON payloads to 17kb
app.use(express.urlencoded({extended:true,limit:"17kb" }))// Parse URL-encoded bodies with a limit of 17kb
app.use(express.static("public"))// Serve static files from the "public" directory or bahar se ane files ko public folder se serve karega 
app.use(cookieParser())// Parse cookies from incoming requests and make them available in req.cookies 

export {app} 