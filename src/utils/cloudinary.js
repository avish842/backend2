import {v2 as cloudinary} from 'cloudinary'

import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})



uploadOnCloudinary =async(localFilePath)=>{
    try {
        if(!localFilePath) {
            throw new Error("No file path provided for upload");
        }
        // upload the file to cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file is uploaded successfully
        console.log("File uploaded successfully to Cloudinary",response.url);
        return response.url; // Return the URL of the uploaded file to the user
    } catch (error) {
        fs.unlinkSync(localFilePath)// Delete the local file if upload fails
        return null
    }
}


export {uploadOnCloudinary}
