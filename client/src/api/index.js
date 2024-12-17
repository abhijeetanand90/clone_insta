import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });


export const createPost=(post)=>API.post("/posts/create", post);

export const fetchPosts=()=>API.get('/posts');