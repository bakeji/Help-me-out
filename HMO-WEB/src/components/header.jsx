import React from "react";

export default function Header() {
    return(
        <header>
            <div className="header-logo">
            <img src="/logo.png" alt="logo" />

            </div>
           

            <div className="fea-works">
                <p>Features</p>
                <p>How it works</p>
            </div>

            <div className="get-strt">
                <p>Get Started</p>
            </div>
        </header>
    )
}