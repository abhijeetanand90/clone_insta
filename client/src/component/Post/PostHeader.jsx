import styles from "./PostHeader.module.css";
import { GoKebabHorizontal } from "react-icons/go";

export default function PostHeader() {
  return (
    <div className={styles.flexHeader}>
      <div className={styles.flexSubheader}>
        <div>
          <img src="./nolan.png" alt="" className={styles.imgResize} />
        </div>
        <div className={styles.namedate}>
          <div className="username">Nolan.Chris</div>
          <div className="text">.1w</div>
        </div>
      </div>
      <div>
        <GoKebabHorizontal size={24} />
      </div>
    </div>
  );
}
