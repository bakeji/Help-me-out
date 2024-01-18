import React from "react";

export default function Popup(){
    return(
        <div className="popup">
            <button><img src="/close-circle.png" alt="close" /></button>
           <div className="success">
           <img src="/success-Kite.png" alt="kite" />
            <p>Your video link has been sent to johnmark@gmail.com</p>
           </div>

           <div className="save">
            <p>Would you need to view this video later? Save to your account now!</p>
            <button>save video</button>
           </div>
           <p>Don’t have an account? Create account</p>
        </div>
    )
}