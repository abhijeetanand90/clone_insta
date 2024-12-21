import { useState } from "react";
import axios from "axios";

export default function Imgform() {
  const [file, setFile] = useState(null);
  file && console.log(file.name);



  const [postData, setPostData] = useState({
    creator: "",
    postedAt: new Date().toISOString(),
    selectedFile: "",
  });


 

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if (!file) {
      alert("Please select a file");
      return;
    }
    const formdata =new FormData;
    formdata.append('image', file);
    formdata.append('post', JSON.stringify(postData));
    try {
      const response= await axios.post("http://localhost:5000/posts/upload",formdata,{
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
      alert("Image uploaded successfully");
    } catch (error) {
      console.log(error.message);
    }
   
  }


  return (
    <div>

<form action="" encType="multipart/form-data"    onSubmit={handleSubmit}>
<input type="text" value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})} />
<input type = "file" name="image" onChange = {e => setFile(e.target.files[0])}/>

<button type = "submit">Submit</button>


</form>

    </div>
  )
}
