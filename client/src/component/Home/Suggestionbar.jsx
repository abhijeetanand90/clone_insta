import styles from "./Suggestionbar.module.css";

export default function Suggestionbar() {
  return (
    <div className={styles.Suggestionbar}>
      <div className={styles.header}>
        <div className={styles.imgName}>
          <img src="./nolan.png" alt="" className={styles.imgResize} />
          <p className="username">Nolan.Chris</p>
        </div>

        <div>Switch</div>
      </div>
      <div><p className="text">Suggested for you</p>
      <p>See all</p></div>
      <p className="text">© 2024 Instagram from Meta</p>
      
    </div>
  );
}
