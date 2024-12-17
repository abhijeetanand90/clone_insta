import { useState } from "react"
import { useDispatch } from "react-redux";
import { postCreate } from "../../redux/features/postSlice";
import Imgform from "./Imgform";


export default function CreatePost() {

  
    const dispatch= useDispatch();


    const [postData, setPostData] = useState({
        creator: "",
        postedAt: new Date().toISOString(),
        selectedFile: "",
      });
  
  

    function handlePost(e){
e.preventDefault();
console.log(postData)
dispatch(postCreate(postData));
    }


  return (
    <div>
      <form action="" onSubmit={handlePost}>
<input type="text" value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})} />


      <button type="submit ">Post</button>
      </form>
      <Imgform />

    </div>
  )
}
