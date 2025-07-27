

// 1st way to write asyncHandler
const asyncHandler=(requestHandler)=>{

    (req,res,next)=>{
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