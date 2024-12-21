
import styles from './SignUp.module.css'
import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <div className={styles.container}>
          <form action=""  className={styles.flexForm}>
            <input type="text" placeholder='Mobile Number or Email Address' />
            <input type="text" placeholder='Password'/>
       <input type="text"  placeholder='Full Name' />
       <input type="text" placeholder='username'/>
       <p className={styles.text}>{" "}People who use our service may have uploaded your contact information to Instagram. Learn more</p>
       <p className={styles.text}>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>


       <button className={styles.signupBtn}>SignUp</button>
          </form>
        

        <p >Have an account?{""} <Link to='/auth' className={styles.btnlogin}> Log In</Link>    </p>

    </div>
  )
}
