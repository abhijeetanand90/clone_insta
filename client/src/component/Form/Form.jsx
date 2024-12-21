import styles from "./Form.module.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Auth } from "../../redux/features/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";









export default function Form() {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
 
    console.log("submit");
  }


  const googleSuccess=(res)=>{
    const decoded=jwtDecode(res.credential)
    dispatch(Auth(decoded))
    navigate("/")
    
 
  };


  const googleError=(err)=>{
    console.log(err);
  }



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
        <GoogleLogin onSuccess={googleSuccess} onError={googleError}/>
        <button> Forgot Password?</button>
      </form>
    </div>
  );
}
