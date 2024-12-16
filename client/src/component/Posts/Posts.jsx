import Post from "../Post/Post";
import styles from './Posts.module.css'

export default function Posts() {
  return (
    <div className={styles.postsWrapper}>
      <Post />
      <Post />
      <Post />

    </div>
  )
}
