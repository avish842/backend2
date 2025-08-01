import  {asyncHandler} from '../utils/asyncHandler.js';

const registerUser =asyncHandler(async(req ,res)=>{

    res.status(200).json({
        message:"chal raha hai mere bhai"
    })
})
export {registerUser}

//use of this file
// This file contains the user-related controller functions for handling user registration and authentication