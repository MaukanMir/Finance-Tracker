//style imports here
import styles from "./Signup.module.css";
//react imports here
import {useState} from "react";

//Hook imports here
import {useSignup} from "../../Hooks/useSignup";


const Signup = () => {

  const [displayName,setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {signup, error, isPending} = useSignup();

  const handleSubmit = (e)=>{
    e.preventDefault();
    signup(email, password, displayName)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
        <h2>Signup</h2>
        <label>
          <span>Username:</span>
          <input
            type="text"
            onChange ={(e)=> setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            onChange ={(e)=> setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            onChange ={(e)=>setPassword(e.target.value)}
            value={password}
          />
        </label>
        {!isPending && <button className="btn">Signup</button>}
        {isPending && <button className="btn" disabled>Loading</button>}
        {error && <p>{error}</p>}
    </form>
  )
}

export default Signup