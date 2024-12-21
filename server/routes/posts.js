import express from "express";
import { createPost,getPosts,deletePost } from "../controllers/posts.js";
import postMessage from "../models/postMessage.js";
import upload from "../middleware/uploads.js";


const router = express.Router();

router.post("/create", createPost);
router.get("/",getPosts);
router.delete("/:id", deletePost)

// router.post("/upload", upload.single("image"), async (req, res) => {
//   console.log(req)
//   try {
//     const newpost = new postMessage({
//       creator: "wick",
//       img: {
//         data: req.file.path,
//         contentType: req.file.mimetype,
//       },
//     });
//     await newpost.save();
//     res.status(201).json({ message: "Image uploaded successfully" });
//   } catch (error) {
//     console.log(error.message);
//   }
// });



router.post("/upload", upload.single("image"), createPost);

export default router;
