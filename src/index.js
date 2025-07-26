// require('dotenv').config({path:'./.env'})// not work due to type : module

import dotenv from 'dotenv';
import connectDB from './db/index.js';
dotenv.config({
    path: './.env'
});


connectDB()

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
