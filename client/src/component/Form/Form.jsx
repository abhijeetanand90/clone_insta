import styles from "./Form.module.css";

function handleSubmit(e) {
  e.preventDefault();
  console.log("submit");
}

export default function Form() {
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.flexForm}>
        <img
          src="./Instagramword_logo.png"
          alt=""
          className={styles.instagramlogo}
        />
        <input placeholder="Phone number, username or email address" />
        <input placeholder="Password" />
        <button type="submit" className={styles.btnlogin}>
          Log in
        </button>
        <p>__________ OR ___________</p>
        <button className={styles.btngoogle}>Sign in with Google</button>
        <button> Forgot Password?</button>
      </form>
    </div>
  );
}
