import express from "express";
import { createPost,getPosts } from "../controllers/posts.js";
import postMessage from "../models/postMessage.js";
import upload from "../middleware/uploads.js";


const router = express.Router();

router.post("/create", createPost);
router.get("/",getPosts);

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const newpost = new postMessage({
      creator: "wick",
      img: {
        data: req.file.path,
        contentType: req.file.mimetype,
      },
    });
    await newpost.save();
    res.status(201).json({ message: "Image uploaded successfully" });
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
