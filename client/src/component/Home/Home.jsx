import Sidebar from "./Sidebar"
import Posts from "../Posts/Posts"
import Suggestionbar from "./Suggestionbar"
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.flexHome}>
      <Sidebar />
      <Posts />
      <Suggestionbar />
      </div>
  )
}
