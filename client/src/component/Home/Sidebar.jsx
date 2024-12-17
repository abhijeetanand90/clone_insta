import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { LuMessageCircle } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";
import {
  InstagramLogo,
  NotificationsLogo,
  CreatePostLogo,
  SearchLogo,
} from "../../assets/constants";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
//   function handleLogout() {
//     console.log("logout");
//   }

  return (
    <div className={styles.sidebarContainer}>
      <div>
        <div>
          <Link to="/">
            <InstagramLogo />
          </Link>
        </div>

        <div className={styles.iconText}>
          <i >
            <AiFillHome size={29}/>
          </i>

          <p>Home</p>
        </div>

        <div className={styles.iconText}>
          <i>
            <SearchLogo />
          </i>

          <p>Search</p>
        </div>
        <div className={styles.iconText}>
            <i> <NotificationsLogo /></i>
         
          <p>Notifications</p>
        </div>
        <Link to='/create'><div className={styles.iconText}>
           <i><CreatePostLogo /></i>
          
          <p>Create</p>
        </div></Link> 
        <div className={styles.iconText}>
            <i><LuMessageCircle size={29}/></i>
            <p>Message</p>
        </div>
        <div className={styles.iconText}> 
          <i><RxAvatar size={29} /></i>
          <p>Profile</p>
        </div>
      </div>

      <div className={styles.iconText}>
       <i><BiLogOut size={29}/></i>
          
          <p>Log out</p>
       
      </div>
    </div>
  );
}
