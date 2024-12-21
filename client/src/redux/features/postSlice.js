import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../api"



export const postCreate=(post)=>async(dispatch)=>{
    

    try {
        const {data}=await api.createPost(post)

        dispatch(create(data))
        
    } catch (error) {
        console.log(error.message)
    }
}


export const getPosts=()=>async(dispatch)=>{

    try {

        const {data}= await api.fetchPosts();
       dispatch(fetch(data))
        
        
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
     fetch:(state, action)=>{
        state.posts=action.payload
     },
     
    }

})



export const {create, fetch}=postsSlice.actions;

export default postsSlice.reducer;