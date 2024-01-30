import React from "react";
import { Link } from "react-router-dom";

export default function LogIn(){
    return(
        <div className="login">
           <div className="logo1">
            <img src="/logo.png" alt="" />
           </div>

           <div className="log-in">
            <h1>Log In</h1>
            <p className="join">Don't have an account? <Link to={'/sign-up'}>sign up</Link></p>

            <form action="">
                <label htmlFor="email"> Email </label>
                <input placeholder="enter your email" type="email" id="email" />

                <label htmlFor="pwd">Password</label>
                <input placeholder="enter your password" type="password" id="pwd"/>     

                <button>log in</button>  
            </form>
           </div>
        </div>
    )
}