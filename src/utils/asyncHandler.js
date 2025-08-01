import mongoose from "mongoose";


// 1st way to write asyncHandler
//what is the use of this code
// The asyncHandler is a utility function that wraps an asynchronous request handler function.
// It ensures that any errors thrown in the async function are caught and passed to the next middleware 
// what is the use of this code and why we write it 
// ans: This code is useful for handling errors in asynchronous Express route handlers. By wrapping the handler in a try-catch block, we can catch any errors that occur during the execution of the handler and pass them to the next middleware for centralized error handling.

const asyncHandler=(requestHandler)=>{

    return  (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).// Promise.resolve is used to ensure that the requestHandler is executed as a promise
        catch((err)=>next(err))// Pass the error to the next middleware ,use of the next is important to handle the error in the express app
    }
}


// 2nd way to write asyncHandler

// how it asyncHandler works 
// it is a higher order function that takes a function as an argument and returns a new function
// the new function is an async function that takes req, res, next as arguments
//const asyncHandler=()=>{}
//const asyncHandler=(func)=>()=>{}
// cost asyncHandler=(func)=>async ()=>{}
// this is used to handle async errors in express middleware


// const asyncHandler= (fn)=>async (req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(error.code||500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }

export {asyncHandler}