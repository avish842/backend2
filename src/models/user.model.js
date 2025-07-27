import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"

const userSchema= new Schema({

    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,// Remove leading and trailing whitespace
        minlength:3,
        index:true // Ensure username is indexed for faster queries (faster search)
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String ,
        required:true,
       
    },
    coverImage:{
        type:String,
    },
    watchHistory:[{
        type:Schema.Types.ObjectId,
        ref:"Video"
    }],
    password:{
        type:String,
        required:[true, "password is required"]
    },
    refreshToken:{
        type:String
    }
},{timestamps:true} )// Automatically manage createdAt and updatedAt timestamps)

// pre hook to hash password before saving . pre hook is a middleware function that runs before a document is saved to the database
// "save" is the event that triggers the pre hook
//   we don't use arrow function here because we need to access the `this` context of the document being saved
// 10 is the salt rounds for hashing
// next() is a callback function that must be called to continue the save operation
userSchema.pre("save", function(next){
    if(!this.isModified("password")) return next(); // If password is not modified, skip hashing
    // Hash the password before saving
    this.password = bcrypt.hash(this.password, 10)
    next();
})

// costum method to check if the password is correct
// this method will be used to compare the password provided by the user with the hashed password stored
userSchema.methods.isCorrectPassword =async function(password){
    // Compare the provided password with the hashed password stored in the database
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function() {
    //sign mothod is used to create a new token
     return jwt.sign(
        {
            _id:this._id, // Include user ID in the token payload
            email:this.email ,// Include email in the token payload
            username:this.username, // Include username in the token payload
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
     );

}
// Method to generate a refresh token for the user
// This token is used to obtain a new access token when the current one expires
// The refresh token is signed with a different secret and has a longer expiry time
// This method is called when the user logs in or when a new refresh token is needed
//
userSchema.methods.generateRefreshToken = function() {
    //sign mothod is used to create a new token
    return jwt.sign(
        {
            _id:this._id, // Include user ID in the token payload
            email:this.email ,// Include email in the token payload
            username:this.username, // Include username in the token payload
            fullName:this.fullName
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );

}
const User=mongoose.model("User", userSchema);