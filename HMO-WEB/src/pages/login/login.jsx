import React from "react";

export default function LogIn(){
    return(
        <div className="login">
           <div className="logo1">
            <img src="/logo.svg" alt="" />
           </div>

           <div className="log-in">
            <h1>Log In</h1>
            <p>Don't have an account? sign up</p>

            <form action="">
                <label htmlFor="email"> Email </label>
                <input type="email" id="email" />

                <label htmlFor="pwd">Password</label>
                <input type="password" id="pwd"/>     

                <button>log in</button>  
            </form>
           </div>
        </div>
    )
}