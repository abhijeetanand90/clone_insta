import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });

// export const createPost=(post)=>API.post("/posts/create", post);
export const createPost = (post) => API.post("/posts/upload", post);

export const fetchPosts = () => API.get("/posts");

export const deletePost = (id) => API.delete(`/posts/${id}`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
