import { createSlice} from "@reduxjs/toolkit";
import * as api from "../../api";









export const SignIN=(formData,navigate)=>async(dispatch)=>{


    try {
        const {data}=await api.SignIN(formData);
        dispatch(Auth(data))
        navigate('/')
    } catch (error) {
        console.log(error.message)
    }




}





const authSlice = createSlice({
  name: "AUTH",
  initialState: {
    authData: null,
  },

  reducers: {
    Auth: (state, action) => {
      localStorage.setItem("user", JSON.stringify({ ...action.payload }));
      state.authData = action.payload;
    },
    Logout: (state, action) => {
      localStorage.removeItem("user");
      state.authData = null;
    },
  },
});

export const {Auth, Logout}=authSlice.actions;
export default authSlice.reducer;