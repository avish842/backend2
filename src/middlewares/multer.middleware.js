import multer from 'multer';

// Configure multer storage
// This will save the uploaded files to the "temp" directory inside "public"
const storage =multer.diskStorage({
    // Set the storage engine for multer
    // This will save the uploaded files to the "temp" directory inside "public"
    destination: function (req ,file,cd){
        cd(null,"./public/temp")// Set the destination for uploaded files to the "temp" directory inside "public"
    },
    filename: function (req,file,cb){// Set the name of the uploaded file
        // Use the original file name as the uploaded file name
         cb(null,file.originalname)// Use the original file name as the uploaded file name
    }
})

export const upload =multer({
    storage,// or storage: storage (because we are using es6 so if both have same name then we can write it directly), Use the configured storage
})
// how the abode code works
// 1. We import multer to handle file uploads.
// 2. We configure multer's storage engine using diskStorage.
// 3. The destination function specifies where to save the uploaded files, which is the "temp" directory inside the "public" folder.
// 4. The filename function sets the name of the uploaded file to its original name.    
// 5. Finally, we export the configured multer instance as "upload" to be used in other parts of the application.
// This middleware can be used in routes to handle file uploads, for example:

// cb is a callback function provided by multer to indicate the status of the file upload.
// It should be called with an error (if any) and the file information.
