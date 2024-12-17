import mongoose from "mongoose";
import { type } from "os";


const postSchema=mongoose.Schema({
    creator:String,
    postedAt:{
        type:Date,
        default: new Date(),
    },
    img:{data:Buffer,contentType: String},
    // desctiption:String,
})


const PostMessage=mongoose.model('PostMessage',postSchema);
export default PostMessage;