//react imports here

// styles import here
import styles from "./Navbar.module.css"
//react router dom imports here
import { Link } from "react-router-dom"
//functional imports here
import {useLogout} from "../../Hooks/useLogout"
import { useAuthContext } from "../../Hooks/useAuthContext"

const Navbar = () => {

  const {logout} = useLogout()
  const {user} = useAuthContext();

  return (
    <nav className ={styles.navbar}>
      <ul>
        <li className ={styles.title}>MyMoney</li>
        {!user && (
        <>
          <li> <Link to ="/login">Login</Link></li>
          <li> <Link to ="/signup">Signup</Link></li>
        </>

        )}
        {user && (
          <>
          <li> Hello, {user.displayName[0].toUpperCase() + user.displayName.substring(1)}</li>
          <li>
            <button onClick={logout} className="btn">Logout</button>
          </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar