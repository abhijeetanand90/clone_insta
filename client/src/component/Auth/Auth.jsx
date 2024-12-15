import styles from "./Auth.module.css";
import Form from "../Form/Form";

export default function Auth() {
  return (
    <div
      className={`${styles.body} ${styles.container} ${styles.flexAuth} ${styles.poppins}`}
    >
      <div>
        <img src="./auth.png" alt="" />
      </div>
      <div>
        <Form />
        <div>Get the app</div>
      </div>
    </div>
  );
}
