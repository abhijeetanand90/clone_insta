import styles from "./Post.module.css";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { useDispatch } from "react-redux";
import { removePost } from "../../redux/features/postSlice";



export default function Post({data, setCurrentId}) {
  
  // const base64Image = btoa(
  //   new Uint8Array(data.img).reduce((str, byte) => str + String.fromCharCode(byte), "")
  // );

  // console.log(data.img.data.data)
  const dispatch=useDispatch();

  const getImagePath = (imgData) => {
    try {
      if (imgData && imgData.data && imgData.data.data) {
        // Convert ASCII values to string
        const path = String.fromCharCode(...imgData.data.data);
        // Convert backslashes to forward slashes for URL compatibility
        const formattedPath = path.replace(/\\/g, '/').replace(/^uploads\//, '');
        return formattedPath;
      }
      console.error('Invalid image data format:', imgData);
      return null;
    } catch (error) {
      console.error('Error converting image path:', error);
      return null;
    }
  };

  const imagePath = data.img ? getImagePath(data.img) : null;

  // Debug logging
  // console.log('Image path:', imagePath);

  function handleDelete(){
           dispatch(removePost(data._id))
  }


  return (
    <div className={styles.flexPost}>
      <div>
       
        <PostHeader creator={data.creator}/>
        <button onClick={handleDelete}>delete</button>
        <button onClick={()=>setCurrentId(data._id)}>update</button>
      </div>
          
        <img src={`http://localhost:5000/uploads/${imagePath}`} alt="" />
      
      <div>
        <PostFooter />
      </div>
    </div>
  );
}
