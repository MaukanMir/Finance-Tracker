//Styles imported here
import  styles from "./Home.module.css"
//React pages import here
import TransactionForm from "./TransactionForm"
import TransactionList from "./TransactionList"
//React functional imports here
import {useAuthContext} from "../../Hooks/useAuthContext"
import { useCollection } from "../../Hooks/useCollection"

const Home = () => {
  const {user} = useAuthContext()
  const {documents, error} = useCollection(
    "transactions",
    ["uid","==",user.uid],
    ["createdAt","desc"]
    );

  return (
    <div className ={styles.container}>
      <div className ={styles.content}>
      {error && <p>{error}</p>}
      {documents && <TransactionList transactions ={documents}/>}
      </div>
      <div className ={styles.sidebar}>
        <TransactionForm uid = {user.uid}/>
      </div>
    </div>
  )

}

export default Home