import {useState,useEffect} from 'react';
import fireInit from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut} from 'firebase/auth';

fireInit()

const useFirebase = () => {

    const [user , setUser]=useState({})
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [error,setError]=useState(false)
    const [isLoading , setIsLoading] =useState(true)
    const auth = getAuth()
    const googleProvider= new GoogleAuthProvider()
    
    
    useEffect(() =>{
         const unsubscribe = onAuthStateChanged(auth , (user)=> {
            
              if(user){
                  setIsLoading(true) 
                  setUser(user)
                  setName(name)
              } else{
                  setUser({})
              }
              setIsLoading(false)
         })
          return ()=> unsubscribe()
    },[])
     
    
      const signInWithGoogle=()=> {
       return  signInWithPopup(auth, googleProvider)
     
      }


    const createAccount=(email,password)=> {
    
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    
    const loginWithEmail =(email,password)=> {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=> {
        
       return signOut(auth)
    }
    
        return {
           user,setUser,
           signInWithGoogle,
           createAccount,
           loginWithEmail,
           isLoading,
           setIsLoading,
           logOut,
           setName,
           name,error,setError,
           email,setEmail,password,setPassword

        
           
        }
    
};

export default useFirebase;