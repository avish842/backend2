// require('dotenv').config({path:'./.env'})// not work due to type : module

import { app } from './app.js';
import dotenv from 'dotenv';
import connectDB from './db/index.js';
dotenv.config({
    path: './.env'
});


connectDB()
.then(app.listen(process.env.PORT||8000,()=>{
    console.log(`App is listening on port ${process.env.PORT || 8000}`);
    
}))
.catch((error)=>{
    console.log("Error connecting to the database !!!",error)
    process.exit(1); // Exit the process with failure
})

// 
/*

;(async()=>{//(fn)() it is used to execute the function fn immediately
    try{
       await  mongoose.connect(`${process.env.MONGODB_URI}/&{DN_NAME}`)
       app.on("error",(error)=>{
        console.log("Error:",error)
       })
       app.listen(`App is listennig on the port ${process.env.PORT}`);
    }
    catch(err){ 
        console.error("Error ",err)
        throw err
    }
}
)()
*/
