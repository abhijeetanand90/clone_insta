import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../api"



export const postCreate=(post)=>async(dispatch)=>{
    

    try {
        const {data}=await api.createPost(post)
        console.log(data)
        dispatch(create(data))
        
    } catch (error) {
        console.log(error.message)
    }
}


export const getPosts=()=>async(dispatch)=>{

    try {

        const {data}= await api.fetchPosts();
        console.log(data)
        
        
    } catch (error) {
        console.log(error.message)
    }

}



const postsSlice=createSlice({
    name:'Posts',
    initialState:{
        posts:[],
       
    },

    reducers:{
        create:(state,action)=>{
            state.posts.push(action.payload)
     },
    }

})



export const {create}=postsSlice.actions;

export default postsSlice.reducer;