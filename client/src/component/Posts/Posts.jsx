import { useSelector } from "react-redux";
import Post from "../Post/Post";
import styles from './Posts.module.css'

export default function Posts() {

const {posts}=useSelector((state)=>state.posts)


  return (
    <div className={styles.postsWrapper}>
      {!posts.length ? null : (<div>
        {posts.map((x)=>(<Post key={x._id} data={x} />))}
        </div>
        )}

    </div>
  )
}
