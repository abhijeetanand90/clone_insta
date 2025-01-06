import express from "express";
import { createPost,getPosts,deletePost,updatePost, likePost} from "../controllers/posts.js";
import postMessage from "../models/postMessage.js";
import upload from "../middleware/uploads.js";
import auth from "../middleware/auth.js"


const router = express.Router();

// router.post("/create", createPost);
router.get("/",getPosts);
router.delete("/:id",auth, deletePost);
router.patch("/:id",upload.single("image"),updatePost);
router.post("/upload",auth,upload.single("image"), createPost);
router.patch("/:id/likePost", auth,likePost)


export default router;
