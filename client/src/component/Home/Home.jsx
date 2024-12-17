import Sidebar from "./Sidebar"
import Posts from "../Posts/Posts"
import Suggestionbar from "./Suggestionbar"
import styles from './Home.module.css'
import { useEffect } from "react"
import { getPosts } from "../../redux/features/postSlice"
import { useDispatch } from "react-redux";


export default function Home() {
  const dispatch=useDispatch();

useEffect(()=>{
dispatch(getPosts())
},[]);

  return (
    <div className={styles.flexHome}>
      <Sidebar />
      <Posts />
      <Suggestionbar />
      </div>
  )
}
