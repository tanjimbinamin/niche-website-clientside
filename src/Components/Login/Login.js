import React,{useState} from 'react';
import useAuth from '../Hooks/useAuth';
import './Login.css'
import img1 from './undraw_remotely_2j6y.svg'
import {Button} from "react-bootstrap"
import { useHistory, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'

const Login = () => {

    const{setUser,signInWithGoogle,createAccount,loginWithEmail,setName,name,setIsLoading,error,setError,email,setEmail,password,setPassword}=useAuth()
    const[value,setValue]=useState(false)
    
    const history =useHistory()
    const location=useLocation()
    const url=location?.state?.from || "/home"

    const handlegoogle=()=>{
        signInWithGoogle()
        .then((res) => 
          {
            console.log(res.user)
            setIsLoading(true)
            setUser(res.user)
            history?.push(url)
          }
        )
        .finally(() => {
            setIsLoading(false)
        })
    }
    const getName=(e)=>{
        setName(e.target.value)
    }
    const getEmail=(e)=>{
        setEmail(e.target.value)
    }
    const getPassword=(e)=>{
        setPassword(e.target.value)
    }

    const handleInfoRegister=(email)=>{

        console.log(email)
        fetch('https://floating-retreat-33100.herokuapp.com/registerInfo',{
            method:"POST",
            headers:{'content-type':"application/json"},
            body:JSON.stringify({email}),
        })
        .then(res=>res.json())
        .then(result=>console.log(result))
        
    }

    const handleRegister=(e)=>{

        e.preventDefault();

        createAccount(email,password)
        .then((res)=>{
            
            handleInfoRegister(res?.user?.email)
            
            setIsLoading(true)
            setUser(res.user)
            setName(name)
            history?.push(url)
        })
        .catch((error) => {
            
            const errorMessage = error.message;
            errorMessage? setError(true ):setError(false)
            console.log(errorMessage)
            if(error){
                Swal.fire({
                    icon: 'error',
                    title: 'Sorry!',
                    text: "This email already exist in our database!"
                  })
            }
            setIsLoading(false)  
          })
        .finally(()=> {

           if(!error){
               
            Swal.fire(
                'Successfully!!',
                'Registered!',
                'success'
              )
           } 
            setIsLoading(false)
          })

    }
    
    const handleLoginWithEmail=(e)=>{
        e.preventDefault();

        loginWithEmail(email,password)
        .then((res)=>{
            setIsLoading(true)
            setUser(res.user)
            history.push(url)
        })
        .catch((err) => Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Your password or email didn't matched!"
           
          }))
        .finally(() => {
            
            setIsLoading(false)
        })

    }


    


    return (
        <div className="content">
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <img src={img1} alt="Image" className="img-fluid"/>
                </div>
                    <div className="col-md-6 contents">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                        <div className="mb-4">
                            {!value===true?<div>
                            <div>
                                <h3>Sign Up</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                            </div>
                            <form onSubmit={handleRegister}>
                            <div className="form-group first">
                                <label for="fullname">Full name</label>
                                <input onBlur={getName} type="text" className="form-control" id="fullname"/>

                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input onBlur={getEmail} type="email" className="form-control" id="email"/>

                            </div>
                            <div className="form-group mb-4">
                                <label for="password">Password</label>
                                <input onBlur={getPassword} type="password" className="form-control" id="password"/>
                            </div>

                            <input type="submit" value="Register" className="btn btn-block btn-primary"/>

                            <span className="d-block text-left my-4 text-muted">&mdash; already have an account? <a style={{textDecoration:"none",color:"coral"}} onClick={()=>setValue(true)} href="#"> <b>Login</b></a> &mdash; </span>
                            
                            <div className="social-login">
                            </div>
                            </form>
                            </div>
                            :
                            <div>
                            <div>
                                <h3>Log In</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                            </div>
                            <form onSubmit={handleLoginWithEmail} >
                            
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input onBlur={getEmail} type="email" className="form-control" id="email"/>
                            </div>
                            <div className="form-group mb-4">
                                <label for="password">Password</label>
                                <input onBlur={getPassword} type="password" className="form-control" id="password"/>
                            </div>

                            <input type="submit" value="Login" className="btn btn-block btn-primary"/>

                            <span className="d-block text-left my-4 text-muted">&mdash; don't have an account? <span><a style={{textDecoration:"none",color:"coral"}} onClick={()=>setValue(false)} href="#"><b>Sign up</b></a></span> &mdash;</span>
                            
                            <div className="social-login">
                            </div>
                            </form>
                            </div>
                            }
                         </div>
                        </div>
                        <Button className="w-50" variant="danger" onClick={handlegoogle}>sign in with google</Button>
                    </div>
                    
                    </div>
                    
                </div>
                </div>
            </div>
    );
};

export default Login;