import mongoose from "mongoose";
import postMessage from "../models/postMessage.js";

// export const createPost = async (req, res) => {
//   const post = req.body;
//   // console.log(post);
//   const newpost = new postMessage({
//     ...post,
//     creator: post.creator,
//     postedAt: new Date().toISOString(),
//   });
//   try {
//     await newpost.save();
//     res.status(201).json(newpost);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };



export const createPost = async (req, res) => {
  const post = JSON.parse(req.body.post);
  console.log(post);
  const newpost = new postMessage({
    ...post,
    creator: post.creator,
    img:{
      data: req.file.path,
      contentType: req.file.mimetype,
    },
    postedAt: new Date().toISOString(),
  });
  try {
    await newpost.save();
    res.status(201).json(newpost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};



export const getPosts = async (req, res) => {
  try {
    const postMessages = await postMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//  export const uploadImage=async(req,res)=>{
//   try {
    
//   } catch (error) {
    
//   }
//  }