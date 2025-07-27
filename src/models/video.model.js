import mongoose,{Schema} from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema= new Schema({
    videoFile:{
        type:String,// cloudinary url se lenge
        required:true,

    },
    thumbnail:{
        type:String,// cloudinary url se lenge
        required:true,
    },
    tittle:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,// cloudinary se lenge
        required:true

    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:false
    }



},{timestamps:true})
videoSchema.plugin(mongooseAggregatePaginate) // Plugin for pagination(Pagination is a technique used to divide large datasets into smaller, more manageable chunks.) of video documents in MongoDB

const Video = mongoose.model("Video",videoSchema)