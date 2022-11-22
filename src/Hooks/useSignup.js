//react imports here
import { useEffect, useState } from "react"
//firebase imports here
import { projectAuth } from "../Components/Firebase/config"

// functional component imports here
import { useAuthContext } from "./useAuthContext";

export const useSignup = ()=>{

    const [isCancelled,setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, displayName) =>{

        setError(null);
        setIsPending(true);

        try{

            const res = await projectAuth.createUserWithEmailAndPassword(email,password);
            console.log(res.user);


            if(!res){
                throw new Error("Could not complete signup")
            }

            // add display name to user
            await res.user.updateProfile({displayName});

            // dispatch login action
            dispatch({type:"LOGIN", payload: res.user});

            if(!isCancelled){
                setIsPending(false);
                setError(null);
            }

        }catch(err){

            if(!isCancelled){
                console.log(err.message)
                setError(err.message)
                setIsPending(false);
            }
        }
    }

    useEffect(()=>{
        return ()=> setIsCancelled(true);
    },[])

    return {signup, error, isPending};

}