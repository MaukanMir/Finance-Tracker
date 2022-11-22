//React imports here
import { useState, useEffect } from "react";
//import functional components here
import { useAuthContext } from "./useAuthContext";
//firebase imports here
import { projectAuth } from "../Components/Firebase/config";

export const useLogin = ()=>{
    const [ isCancelled, setIsCancelled ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ isPending, setIsPending ] = useState(false);
    const { dispatch } = useAuthContext();


    const login = async (email,password)=>{
        setError(null);
        setIsPending(true);

        try{
            
            const res = await projectAuth.signInWithEmailAndPassword(email,password);

            //dispatch login action

            dispatch({type:"LOGIN", payload: res.user})

            if(!isCancelled){
                setIsPending(false);
                setError(null);
            }


        }catch(err){
            if(!isCancelled){
                setError(err.message)
                setIsPending(false)
                console.log(err.message)
            }
        }
    }


useEffect(()=>{
    return ()=> setIsCancelled(true);
},[])

return { login, error, isPending }
}