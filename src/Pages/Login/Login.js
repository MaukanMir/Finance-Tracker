//styles imported here
import styles from  "./Login.module.css"
//React imports here
import { useState } from "react"
//import function components here
import { useLogin } from "../../Hooks/useLogin";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {login, error, isPending} = useLogin();

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(email,password)
    login(email,password)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
        <h2>Login</h2>
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
        {!isPending && <button className="btn">Login</button>}
        {isPending && <button disabled className="btn">Login</button>}
        {error && <p>{error}</p>}
    </form>
  )
}

export default Login