import React from "react";
export default function Footer(){
    return(
        <footer>
            <div className="logo">
                <img src="/logo-white.png" alt="logo" />
            </div>

            <div className="menu">
                <h3>Menu</h3>
                <p>Home</p>
                <p>Converter</p>
                <p>How it Works</p>
            </div>

            <div className="about">
                <h3>About</h3>
                <p>About</p>
                <p>Contact</p>
                <p>Privacy</p>
            </div>

            <div className="scrn-rcd">
                <h3>Screen Record</h3>
                <p>Browser Window</p>
                <p>Desktop</p>
                <p>Application</p>
            </div>
        </footer>
    )
}