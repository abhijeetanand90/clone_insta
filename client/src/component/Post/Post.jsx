import styles from "./Post.module.css";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";


export default function Post() {
  return (
    <div className={styles.flexPost}>
      <div>
       
        <PostHeader />
      </div>

      
        <img src="./Bane.png" alt="" />
      
      <div>
        <PostFooter />
      </div>
    </div>
  );
}
