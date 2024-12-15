import styles from './PostHeader.module.css'





export default function PostHeader() {
    return (
      <div className={styles.flexHeader}>
  
  
          <div className={styles.flexSubheader}>
              <div>img</div>
              <div>username</div>
              <div >Date</div>
              
          </div>  
          <div>Unfollow</div>
      </div>
    )
  }