import React from "react";
import { Link } from "react-router-dom";


export default function Save(){
    return(
        <div className="sv">
            <p>To ensure the availability and privacy of your video, we recommend saving it to your account.</p>
            <button>Save Video</button>
            <p>Don’t have an account? <Link to={"/sign-up"}> Create account</Link> </p>
        </div>
    )
}