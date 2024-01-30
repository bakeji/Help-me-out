import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="signup">
      <div className="logo1">
        <img src="/logo.png" alt="logo" />
      </div>

      <div className="signup-txt">
        <div className="sign">
          <p>SIGN UP</p>
          <p className="join">
            Join millions of others in sharing successful moves on HelpMeOut.
          </p>
          <button>
            <img src="/google.png" alt="google" /> continue with google
          </button>
          <button>
            <img src="/fb.png" alt="facebook" /> Continue with facebook
          </button>
        </div>

        <div className="line-txt">
          <hr />
          <p>or</p>
          <hr />
        </div>

        <form action="">
          
             <label htmlFor="email"> Email </label>
             <input placeholder="enter your email address" type="email" id="email" />
          


             <label htmlFor="pwd">Password</label>
             <input placeholder="enter your password" type="password" id="pwd" />
    

          <button>Sign up</button>
        </form>
        <p className="join">Already have an account? <Link to={"/log-in"}>Log in</Link> </p>
      </div>
    </div>
  );
}
