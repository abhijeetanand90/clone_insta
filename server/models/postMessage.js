import mongoose from "mongoose";
import { type } from "os";


const postSchema=mongoose.Schema({
    creator:String,
    userid:String,
    postedAt:{
        type:Date,
        default: new Date(),
    },
    likes:{
        type:[String], // This indicates that `likes` is an array of strings.
        default:[],       // The default value is an empty array, meaning no likes initially.
    },
    img:{data:Buffer,contentType: String},
    // desctiption:String,
})


const PostMessage=mongoose.model('PostMessage',postSchema);
export default PostMessage;