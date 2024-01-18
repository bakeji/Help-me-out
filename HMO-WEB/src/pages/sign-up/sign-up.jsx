import React from "react";
export default function Signup(){
    return(
        <div className="signup">
           <div className="logo1">
            <img src="/logo.svg" alt="" />
           </div>

           <div className="signup-txt">
           <div className="sign">
            <p>SIGN UP</p>
            <p>Join millions of others in sharing successful moves on HelpMeOut.</p>
            <button><img src="/google.png" alt="google" /> continue with google</button>
            <button><img src="/fb.png" alt="facebook" /> Continue with facebook</button>
           </div>

           <div>
            <hr />
            <p>or</p>
            <hr />
           </div>

           <form action="">
           <label htmlFor="email"> Email </label>
                <input type="email" id="email" />

                <label htmlFor="pwd">Password</label>
                <input type="password" id="pwd"/>       

                <button>Sign up</button>
           </form>
           </div>

        </div>
    )

}