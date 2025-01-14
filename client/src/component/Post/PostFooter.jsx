
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";
import { CiBookmark } from "react-icons/ci";
import styles from './PostFooter.module.css'
import { useDispatch } from "react-redux";
import { likePost } from "../../redux/features/postSlice";


export default function PostFooter({data}) {


const dispatch=useDispatch();

  return (
    <div className={styles.footer}>
    <div className={styles.footerIcons}>

<div className={styles.subIcons}>
  <i><FaRegHeart size={24}    onClick={()=>dispatch(likePost(data._id))}/></i>
  <i><FaRegComment size={24}/></i>
  <i><TbLocationShare size={24}/></i>
</div>
    <i><CiBookmark size={24}/></i>
    </div>
    <p className="likes-count">{`${data.likes.length} Likes`}</p>
    <div>Username</div>
    {/* <div><input type="text" placeholder="Add a comment ..." /></div>  input is not streching out-remove div and put inside flex */}
    <input type="text" placeholder="Add a comment ..." />
    </div>
  )
}
