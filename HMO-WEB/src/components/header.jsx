import React from "react";

export default function Header() {
    return(
        <div className="header">
            <img src="/logo.png" alt="logo" />

            <div className="fea-works">
                <p>Features</p>
                <p>How it works</p>
            </div>

            <div className="get-strt">
                <p>Get Started</p>
            </div>
        </div>
    )
}