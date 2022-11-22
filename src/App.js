//import pages here
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
//react router dom imports here
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
//Components
import Navbar from "./Components/Navbar/Navbar";
//import functional components here
import { useAuthContext } from "./Hooks/useAuthContext";


function App() {

  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
    {authIsReady && (
      <BrowserRouter>
      <Navbar/>

      <Switch>
      <Route exact path="/">
      {user && <Home/>}
      {!user && <Redirect to ="/login"/> }
      </Route> 
      
      <Route path ="/login"> 
        { !user && <Login/>}
        {user && <Redirect to ="/"/> }
      </Route>

      <Route path ="/signup">
        {!user && <Signup/>}
        {user && <Redirect to ="/"/>}
      </Route>

      </Switch>
      </BrowserRouter>
    )}
    </div>
  );
}

export default App
